import React, { useState } from 'react';
import './Contact.css'
import { ChevronRight, Car, Package, CheckCircle, Clock, MapPin, Phone, Mail, User, Calendar, CreditCard, Truck, Shield, Star, Globe, Check } from 'lucide-react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('purchase');
  const [selectedModel, setSelectedModel] = useState('');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [purchaseStep, setPurchaseStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [currentOrderId, setCurrentOrderId] = useState('');
  const [orders, setOrders] = useState({});
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    preferredDelivery: '',
    customizations: []
  });

  const carModels = [
    { name: 'Jesko', price: '$3,000,000', description: 'Ultimate track-focused hypercar', image: '🏎️' },
    { name: 'CC850', price: '$3,650,000', description: 'Perfect balance of luxury and performance', image: '🚗' },
    { name: 'Gemera', price: '$1,700,000', description: 'Revolutionary hybrid grand tourer', image: '🚘' },
    { name: 'Regera', price: '$1,900,000', description: 'Direct transmission innovation', image: '🏁' }
  ];

  const customizationOptions = [
    { id: 'carbon', name: 'Carbon Fiber Body Kit', price: '$150,000', description: 'Lightweight performance enhancement' },
    { id: 'interior', name: 'Bespoke Interior Package', price: '$200,000', description: 'Custom leather and alcantara' },
    { id: 'wheels', name: 'Forged Carbon Wheels', price: '$50,000', description: 'Ultra-light racing wheels' },
    { id: 'paint', name: 'Custom Paint Finish', price: '$75,000', description: 'Exclusive color matching' },
    { id: 'sound', name: 'Premium Sound System', price: '$25,000', description: 'Studio-quality audio' }
  ];

  // Generate random 6-digit tracking ID
  const generateTrackingId = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleCustomizationToggle = (optionId) => {
    setOrderDetails(prev => ({
      ...prev,
      customizations: prev.customizations.includes(optionId)
        ? prev.customizations.filter(id => id !== optionId)
        : [...prev.customizations, optionId]
    }));
  };

  const handlePlaceOrder = () => {
    const trackingId = generateTrackingId();
    const orderData = {
      model: selectedModel,
      orderDate: new Date().toISOString().split('T')[0],
      estimatedDelivery: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 6 months from now
      status: 'confirmed',
      progress: 5,
      stages: [
        { name: 'Order Confirmed', completed: true, date: new Date().toISOString().split('T')[0] },
        { name: 'Design Finalization', completed: false, date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] },
        { name: 'Manufacturing Started', completed: false, date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] },
        { name: 'Quality Control', completed: false, date: new Date(Date.now() + 150 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] },
        { name: 'Final Testing', completed: false, date: new Date(Date.now() + 165 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] },
        { name: 'Delivery', completed: false, date: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] }
      ],
      location: 'Ängelholm, Sweden',
      craftsman: 'Erik Lindqvist',
      customerInfo: orderDetails,
      customizations: orderDetails.customizations,
      totalPrice: calculateTotal()
    };

    setOrders(prev => ({ ...prev, [trackingId]: orderData }));
    setCurrentOrderId(trackingId);
    setOrderPlaced(true);
    setPurchaseStep(5);
  };

  const calculateTotal = () => {
    const basePrice = parseFloat(carModels.find(c => c.name === selectedModel)?.price.replace(/[$,]/g, '') || 0);
    const customizationTotal = orderDetails.customizations.reduce((sum, id) => 
      sum + parseFloat(customizationOptions.find(o => o.id === id)?.price.replace(/[$,]/g, '') || 0), 0
    );
    return basePrice + customizationTotal;
  };

  const handleTrackingSubmit = () => {
    if (orders[trackingNumber]) {
      setActiveTab('tracking-results');
    } else {
      alert('Tracking number not found. Please check and try again.');
    }
  };

  const resetOrder = () => {
    setSelectedModel('');
    setOrderDetails({
      name: '',
      email: '',
      phone: '',
      location: '',
      preferredDelivery: '',
      customizations: []
    });
    setPurchaseStep(1);
    setOrderPlaced(false);
    setCurrentOrderId('');
  };

  const PurchaseForm = () => (
    <div className="purchase-form">
      {purchaseStep === 1 && (
        <div className="step-content">
          <div className="step-header">
            <h3 className="step-title">Choose Your Koenigsegg</h3>
            <p className="step-description">Select from our exclusive collection of hypercars</p>
          </div>
          <div className="car-models-grid">
            {carModels.map((car) => (
              <div
                key={car.name}
                onClick={() => setSelectedModel(car.name)}
                className={`car-model-card ${selectedModel === car.name ? 'selected' : ''}`}
              >
                <div className="car-model-image">{car.image}</div>
                <div className="car-model-info">
                  <h4 className="car-model-name">{car.name}</h4>
                  <p className="car-model-description">{car.description}</p>
                  <span className="car-model-price">{car.price}</span>
                </div>
                {selectedModel === car.name && (
                  <div className="selection-indicator">
                    <CheckCircle className="selection-icon" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <button
            onClick={() => setPurchaseStep(2)}
            disabled={!selectedModel}
            className={`btn-primary ${!selectedModel ? 'disabled' : ''}`}
          >
            Continue to Customization
            <ChevronRight className="btn-icon" />
          </button>
        </div>
      )}

      {purchaseStep === 2 && (
        <div className="step-content">
          <div className="step-header">
            <h3 className="step-title">Customize Your {selectedModel}</h3>
            <p className="step-description">Personalize your hypercar with premium options</p>
          </div>
          <div className="customization-grid">
            {customizationOptions.map((option) => (
              <div
                key={option.id}
                className={`customization-card ${orderDetails.customizations.includes(option.id) ? 'selected' : ''}`}
                onClick={() => handleCustomizationToggle(option.id)}
              >
                <div className="customization-info">
                  <h4 className="customization-name">{option.name}</h4>
                  <p className="customization-description">{option.description}</p>
                  <span className="customization-price">{option.price}</span>
                </div>
                <div className="customization-toggle">
                  {orderDetails.customizations.includes(option.id) ? (
                    <Check className="toggle-icon active" />
                  ) : (
                    <div className="toggle-icon inactive"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="step-navigation">
            <button onClick={() => setPurchaseStep(1)} className="btn-secondary">
              Back
            </button>
            <button onClick={() => setPurchaseStep(3)} className="btn-primary">
              Continue to Details
              <ChevronRight className="btn-icon" />
            </button>
          </div>
        </div>
      )}

      {purchaseStep === 3 && (
        <div className="step-content">
          <div className="step-header">
            <h3 className="step-title">Your Information</h3>
            <p className="step-description">Please provide your contact details</p>
          </div>
          <div className="form-grid">
            <div className="input-group">
              <label className="input-label">Full Name</label>
              <div className="input-wrapper">
                <User className="input-icon" />
                <input
                  type="text"
                  value={orderDetails.name}
                  onChange={(e) => setOrderDetails(prev => ({ ...prev, name: e.target.value }))}
                  className="input-field"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Email Address</label>
              <div className="input-wrapper">
                <Mail className="input-icon" />
                <input
                  type="email"
                  value={orderDetails.email}
                  onChange={(e) => setOrderDetails(prev => ({ ...prev, email: e.target.value }))}
                  className="input-field"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Phone Number</label>
              <div className="input-wrapper">
                <Phone className="input-icon" />
                <input
                  type="tel"
                  value={orderDetails.phone}
                  onChange={(e) => setOrderDetails(prev => ({ ...prev, phone: e.target.value }))}
                  className="input-field"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Location</label>
              <div className="input-wrapper">
                <MapPin className="input-icon" />
                <input
                  type="text"
                  value={orderDetails.location}
                  onChange={(e) => setOrderDetails(prev => ({ ...prev, location: e.target.value }))}
                  className="input-field"
                  placeholder="Enter your location"
                  required
                />
              </div>
            </div>
            <div className="input-group full-width">
              <label className="input-label">Preferred Delivery Date</label>
              <div className="input-wrapper">
                <Calendar className="input-icon" />
                <input
                  type="date"
                  value={orderDetails.preferredDelivery}
                  onChange={(e) => setOrderDetails(prev => ({ ...prev, preferredDelivery: e.target.value }))}
                  className="input-field"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>
          </div>
          <div className="step-navigation">
            <button onClick={() => setPurchaseStep(2)} className="btn-secondary">
              Back
            </button>
            <button 
              onClick={() => setPurchaseStep(4)} 
              className="btn-primary"
              disabled={!orderDetails.name || !orderDetails.email || !orderDetails.phone || !orderDetails.location}
            >
              Review Order
              <ChevronRight className="btn-icon" />
            </button>
          </div>
        </div>
      )}

      {purchaseStep === 4 && (
        <div className="step-content">
          <div className="step-header">
            <h3 className="step-title">Order Summary</h3>
            <p className="step-description">Please review your order details</p>
          </div>
          <div className="order-summary">
            <div className="summary-section">
              <h4 className="summary-title">Vehicle Selection</h4>
              <div className="summary-item">
                <span className="summary-label">Model:</span>
                <span className="summary-value">Koenigsegg {selectedModel}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Base Price:</span>
                <span className="summary-value">{carModels.find(c => c.name === selectedModel)?.price}</span>
              </div>
            </div>

            {orderDetails.customizations.length > 0 && (
              <div className="summary-section">
                <h4 className="summary-title">Customizations</h4>
                {orderDetails.customizations.map((id) => {
                  const option = customizationOptions.find(o => o.id === id);
                  return (
                    <div key={id} className="summary-item">
                      <span className="summary-label">{option.name}:</span>
                      <span className="summary-value">{option.price}</span>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="summary-section">
              <h4 className="summary-title">Customer Information</h4>
              <div className="summary-item">
                <span className="summary-label">Name:</span>
                <span className="summary-value">{orderDetails.name}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Email:</span>
                <span className="summary-value">{orderDetails.email}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Location:</span>
                <span className="summary-value">{orderDetails.location}</span>
              </div>
            </div>

            <div className="order-total">
              <div className="total-line">
                <span className="total-label">Total Amount:</span>
                <span className="total-value">${calculateTotal().toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div className="step-navigation">
            <button onClick={() => setPurchaseStep(3)} className="btn-secondary">
              Back
            </button>
            <button onClick={handlePlaceOrder} className="btn-primary confirm-btn">
              <CreditCard className="btn-icon" />
              Place Order
            </button>
          </div>
        </div>
      )}

      {purchaseStep === 5 && orderPlaced && (
        <div className="step-content">
          <div className="order-success">
            <div className="success-icon">
              <CheckCircle className="success-check" />
            </div>
            <h3 className="success-title">Order Confirmed!</h3>
            <p className="success-message">
              Your Koenigsegg {selectedModel} has been successfully ordered.
            </p>
            <div className="tracking-info">
              <div className="tracking-number">
                <span className="tracking-label">Your Tracking Number:</span>
                <span className="tracking-id">{currentOrderId}</span>
              </div>
              <p className="tracking-note">
                Save this tracking number to monitor your order progress.
              </p>
            </div>
            <div className="success-actions">
              <button 
                onClick={() => {
                  setTrackingNumber(currentOrderId);
                  setActiveTab('tracking-results');
                }}
                className="btn-primary"
              >
                Track My Order
              </button>
              <button onClick={resetOrder} className="btn-secondary">
                Place Another Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const TrackingForm = () => (
    <div className="tracking-form">
      <div className="step-header">
        <h3 className="step-title">Track Your Order</h3>
        <p className="step-description">Enter your tracking number to view order status</p>
      </div>
      <div className="tracking-input-section">
        <div className="input-group">
          <label className="input-label">Tracking Number</label>
          <div className="input-wrapper">
            <Package className="input-icon" />
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
              className="input-field"
              placeholder="Enter 6-digit tracking code (e.g., A1B2C3)"
              maxLength="6"
            />
          </div>
        </div>
        <button
          onClick={handleTrackingSubmit}
          className="btn-primary"
          disabled={trackingNumber.length !== 6}
        >
          <Package className="btn-icon" />
          Track Order
        </button>
      </div>
    </div>
  );

  const TrackingResults = () => {
    const order = orders[trackingNumber];
    if (!order) return <div className="error-message">Order not found</div>;

    return (
      <div className="tracking-results">
        <div className="order-header">
          <h3 className="order-title">Order #{trackingNumber}</h3>
          <div className="order-info">
            <span className="order-model">Koenigsegg {order.model}</span>
            <span className="order-date">Ordered: {order.orderDate}</span>
          </div>
        </div>

        <div className="status-cards">
          <div className="status-card">
            <Calendar className="status-icon" />
            <div className="status-info">
              <span className="status-label">Estimated Delivery</span>
              <span className="status-value">{order.estimatedDelivery}</span>
            </div>
          </div>
          <div className="status-card">
            <MapPin className="status-icon" />
            <div className="status-info">
              <span className="status-label">Current Location</span>
              <span className="status-value">{order.location}</span>
            </div>
          </div>
          <div className="status-card">
            <User className="status-icon" />
            <div className="status-info">
              <span className="status-label">Master Craftsman</span>
              <span className="status-value">{order.craftsman}</span>
            </div>
          </div>
        </div>

        <div className="progress-section">
          <div className="progress-header">
            <h4 className="progress-title">Production Progress</h4>
            <span className="progress-percentage">{order.progress}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${order.progress}%` }}
            ></div>
          </div>
        </div>

        <div className="timeline-section">
          <h4 className="timeline-title">Production Timeline</h4>
          <div className="timeline">
            {order.stages.map((stage, index) => (
              <div key={index} className={`timeline-item ${stage.completed ? 'completed' : ''}`}>
                <div className="timeline-marker">
                  {stage.completed ? (
                    <CheckCircle className="timeline-icon completed" />
                  ) : (
                    <Clock className="timeline-icon pending" />
                  )}
                </div>
                <div className="timeline-content">
                  <span className="timeline-stage">{stage.name}</span>
                  <span className="timeline-date">{stage.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="koenigsegg-contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="main-title">
            Koenigsegg <span className="title-accent">Experience</span>
          </h1>
          <p className="main-subtitle">
            Begin your journey with the world's most exclusive hypercars
          </p>
        </div>

        <div className="tab-navigation">
          <button
            onClick={() => setActiveTab('purchase')}
            className={`nav-tab ${activeTab === 'purchase' ? 'active' : ''}`}
          >
            <Car className="tab-icon" />
            Purchase
          </button>
          <button
            onClick={() => setActiveTab('tracking')}
            className={`nav-tab ${activeTab === 'tracking' ? 'active' : ''}`}
          >
            <Package className="tab-icon" />
            Track Order
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'purchase' && <PurchaseForm />}
          {activeTab === 'tracking' && <TrackingForm />}
          {activeTab === 'tracking-results' && <TrackingResults />}
        </div>

        <div className="features-section">
          <div className="feature-card">
            <Shield className="feature-icon" />
            <h3 className="feature-title">Lifetime Warranty</h3>
            <p className="feature-description">Comprehensive protection for your investment</p>
          </div>
          <div className="feature-card">
            <Star className="feature-icon" />
            <h3 className="feature-title">VIP Service</h3>
            <p className="feature-description">Dedicated support throughout your journey</p>
          </div>
          <div className="feature-card">
            <Globe className="feature-icon" />
            <h3 className="feature-title">Global Delivery</h3>
            <p className="feature-description">White-glove delivery worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;