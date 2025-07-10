import { useState } from 'react'
import './Explore.css'
import JeskoAttack2 from '../../Assets/JeskoAttack2.jpg';
import JeskoAttack1 from '../../Assets/JeskoAttack1.jpg';
import JeskoAttack3 from '../../Assets/JeskoAttack3.jpg';
import JeskoAttack4 from '../../Assets/JeskoAttack4.jpg';
import gemera1  from '../../Assets/gemera1.png';
import Gemera11  from '../../Assets/Gemera11.png'
import Gemera2 from '../../Assets/Gemera2.png';
import Gemera3 from '../../Assets/Gemera3.jpg';
import Gemera4 from '../../Assets/Gemera4.jpg';
import Gemera5 from '../../Assets/Gemera5.jpg';
import Gemera6 from '../../Assets/Gemera6.jpg';
import CC8502 from '../../Assets/CC8502.jpg';
import CC8503 from '../../Assets/CC8503.jpg';
import CC8504 from '../../Assets/CC8504.jpg';
import CC8505 from '../../Assets/CC8505.jpg';
import CC8506 from '../../Assets/CC8506.jpg';
import CC8S1 from '../../Assets/CC8S1.jpg';
import CC8S2 from '../../Assets/CC8S2.jpg';
import CC8S3 from '../../Assets/CC8S3.jpg';
import CCX1 from '../../Assets/CCX1.jpg';
import CCX2 from '../../Assets/CCX2.jpg';
import CCX3 from '../../Assets/CCX3.jpg';
import CCX4 from '../../Assets/CCX4.jpg';
import CCXR1 from '../../Assets/CCXR1.jpg';
import CCXR2 from '../../Assets/CCXR2.jpg';
import CCXR3 from '../../Assets/CCXR3.jpg';
import CCXR4 from '../../Assets/CCXR4.jpg';
import One1 from '../../Assets/One1.jpg';
import One2 from '../../Assets/One2.jpg';
import One3 from '../../Assets/One3.jpeg';
import One4 from '../../Assets/One4.jpg';
import Regera1 from '../../Assets/Regera1.jpg';
import Regera2 from '../../Assets/Regera2.jpg';
import Regera3 from '../../Assets/Regera3.jpg';
import Regera4 from '../../Assets/Regera4.jpg';
import Agera from '../../Assets/Agera.jpeg';
import Agera2 from '../../Assets/Agera2.jpg';
import Agera3 from '../../Assets/Agera3.jpg';
import Agera4 from '../../Assets/Agera4.jpg';
import Agerars1 from '../../Assets/Agerars1.jpg';
import Agerars2 from '../../Assets/Agerars2.jpeg';
import Agerars3 from '../../Assets/Agerars3.jpg';
// import Agerars4 from '../../Assets/Agerars4.jpg';
import AgeraS1 from '../../Assets/AgeraS1.jpg';
import AgeraS2 from '../../Assets/AgeraS2.jpg';
import AgeraS3 from '../../Assets/AgeraS3.jpg';
import AgeraS4 from '../../Assets/AgeraS4.jpg';






const Explore = () => {
  const [selectedModel, setSelectedModel] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')

  const models = [
    {
      id: 1,
      name: 'Jesko Attack',
      tagline: 'Track-Focused Perfection',
      price: '$3.0M',
      image: JeskoAttack2,
      gallery: {
        overview: JeskoAttack2,
        engine: JeskoAttack1,
        performance: JeskoAttack4,
        interior: JeskoAttack3
      },
      description: 'The Jesko is Koenigsegg\'s track-focused hypercar, named after Christian von Koenigsegg\'s father. It represents the pinnacle of aerodynamic efficiency and track performance, featuring active aerodynamics and the most powerful engine ever created by Koenigsegg.',
      specs: {
        engine: {
          type: 'Twin-Turbo V8',
          displacement: '5.0L',
          power: '1,600 hp',
          torque: '1,106 lb-ft',
          transmission: '9-Speed LST',
          layout: 'Mid-Engine RWD'
        },
        performance: {
          acceleration: '0-60 mph in 2.5s',
          topSpeed: '330+ mph (theoretical)',
          weight: '3,131 lbs',
          powerToWeight: '1.96 lbs/hp',
          braking: '100-0 mph in 107 ft',
          lapTime: 'Sub 7:00 Nürburgring'
        },   
        interior: {
          seats: '2-Seater',
          materials: 'Alcantara, Carbon Fiber',
          infotainment: '9" Touchscreen',
          climate: 'Dual-Zone AC',
          audio: 'Premium Sound System',
          storage: 'Minimal Luggage Space'
        }
      }
    },

    {
      id: 2,
      name: 'Gemera',
      tagline: 'The Mega-GT',
      price: '$1.7M',
      image: gemera1,
      gallery: {
        overview: gemera1 ,
        engine: Gemera11,
        performance: Gemera6,
        interior: Gemera3
      },
      description: 'The Gemera is Koenigsegg\'s revolutionary 4-seat grand tourer hybrid. Combining 1,700 horsepower with environmental consciousness, it offers luxury, performance, and practicality in a stunning package that redefines what a hypercar can be.',
      specs: {
        engine: {
          type: 'Hybrid Twin-Turbo 3-Cyl + 3 Motors',
          displacement: '2.0L + Electric',
          power: '1,700 hp',
          torque: '2,581 lb-ft',
          transmission: 'Single-Speed Direct Drive',
          layout: 'AWD Hybrid'
        },
        performance: {
          acceleration: '0-60 mph in 2.8s',
          topSpeed: '250 mph',
          weight: '4,079 lbs',
          powerToWeight: '2.4 lbs/hp',
          range: '620 miles total',
          electricRange: '31 miles pure electric'
        },
        interior: {
          seats: '4-Seater GT',
          materials: 'Leather, Alcantara, Carbon',
          infotainment: '12" Touchscreen',
          climate: 'Quad-Zone Climate',
          audio: 'Bespoke Audio System',
          storage: 'Generous Luggage Space'
        }
      }
    },

    {
      id: 3,
      name: 'CC850',
      tagline: 'The Perfect Balance',
      price: '$3.65M',
      image: CC8502,
      gallery: {
        overview: CC8502,
        engine: CC8503,
        performance: CC8504,
        interior: CC8505
      },
      description: 'The CC850 represents the perfect synthesis of classic automotive soul and modern hypercar performance. With its innovative Engage Shift System (ESS), it delivers the emotional connection of a manual transmission with the efficiency of modern technology.',
      specs: {
        engine: {
          type: 'Twin-Turbo V8',
          displacement: '5.0L',
          power: '1,385 hp',
          torque: '1,020 lb-ft',
          transmission: 'ESS 9-Speed',
          layout: 'Mid-Engine RWD'
        },
        performance: {
          acceleration: '0-60 mph in 2.8s',
          topSpeed: '205 mph',
          weight: '3,197 lbs',
          powerToWeight: '2.31 lbs/hp',
          braking: '100-0 mph in 104 ft',
          lapTime: 'Track-Optimized Setup'
        },
        interior: {
          seats: '2-Seater Sports',
          materials: 'Premium Leather, Carbon',
          infotainment: '9" Display',
          climate: 'Dual-Zone AC',
          audio: 'High-Fidelity System',
          storage: 'Weekend Luggage'
        }
      }
    },
    
    {
      id: 4,
      name: 'Agera',
      tagline: 'Uncompromising Performance',
      price: '$2.5M',
      image: Agera,
      gallery: {
        overview: Agera4,
        engine: Agera2,
        performance: Agera4,
        interior: Agera3
      },
      description: 'The Agera is a megacar that embodies Koenigsegg\'s philosophy of performance, innovation, and exclusivity. It features advanced technology and a powerful twin-turbo V8 engine.',
      specs: {
        engine: {
          type: 'Twin-Turbo V8',
          displacement: '5.0L',
          power: '940 hp',
          torque: '1,011 lb-ft',
          transmission: '7-Speed Dual-Clutch',
          layout: 'Mid-Engine RWD'
        },
        performance: {
          acceleration: '0-60 mph in 2.8s',
          topSpeed: '273 mph',
          weight: '3,307 lbs',
          powerToWeight: '3.52 lbs/hp',
          braking: '60-0 mph in 110 ft'
        },
        interior: {
          seats: '2-Seater',
          materials: 'Alcantara, Carbon Fiber',
          infotainment: '9" Touchscreen',
          climate: 'Dual-Zone AC',
          audio: 'Premium Sound System',
          storage: 'Minimal Luggage Space'
        }
      }
   },


    {
      id: 5,
      name: 'Agera RS',
      tagline: 'Track-Ready Beast',
      price: '$2.8M',
      image: Agerars1,
      gallery: {
        overview: Agerars3,
        engine: Agerars2,
        performance: Agerars3,
        interior: Agerars1
      },
      description: 'The Agera RS is a limited-production variant of the Agera, designed for ultimate performance and track capability. It features significant upgrades to aerodynamics, engine power, and handling.',
      specs: {
        engine: {
          type: 'Twin-Turbo V8',
          displacement: '5.0L',
          power: '1,340 hp',
          torque: '1,011 lb-ft',
          transmission: '7-Speed Dual-Clutch',
          layout: 'Mid-Engine RWD'
        },
        performance: {
          acceleration: '0-60 mph in 2.5s',
          topSpeed: '273 mph',
          weight: '3,075 lbs',
          powerToWeight: '2.29 lbs/hp',
          braking: '60-0 mph in 110 ft'
        },
        interior: {
          seats: '2-Seater',
          materials: 'Alcantara, Carbon Fiber',
          infotainment: '9" Touchscreen',
          climate: 'Dual-Zone AC',
          audio: 'Premium Sound System',
          storage: 'Minimal Luggage Space'
        }
      }
    },


    {
      id: 6,
      name: 'Agera S',
      tagline: 'High-Performance Variant',
      price: '$2.6M',
      image: AgeraS3,
      gallery: {
        overview: AgeraS1,
        engine: AgeraS4,
        performance: AgeraS2,
        interior: AgeraS2
      },
      description: 'The Agera S is a high-performance variant of the Agera, offering enhanced power and aerodynamics. It is designed for drivers who demand exceptional performance and exclusivity.',
      specs: {
        engine: {
          type: 'Twin-Turbo V8',
          displacement: '5.0L',
          power: '1,030 hp',
          torque: '1,011 lb-ft',
          transmission: '7-Speed Dual-Clutch',
          layout: 'Mid-Engine RWD'
        },
        performance: {
          acceleration: '0-60 mph in 2.6s',
          topSpeed: '273 mph',
          weight: '3,307 lbs',
          powerToWeight: '3.21 lbs/hp',
          braking: '60-0 mph in 110 ft'
        },
        interior: {
          seats: '2-Seater',
          materials: 'Alcantara, Carbon Fiber',
          infotainment: '9" Touchscreen',
          climate: 'Dual-Zone AC',
          audio: 'Premium Sound System',
          storage: 'Minimal Luggage Space'
        }
      }
    },

    
    {
      id: 7,
      name: 'Regera',
      tagline: 'The Ultimate Luxury Megacar',
      price: '$2.2M',
      image: Regera1,
      gallery: {
        overview: Regera2,
        engine: Regera4,
        performance: Regera1,
        interior: Regera3
      },
      description: 'The Regera is a luxury megacar that combines exceptional performance with comfort and elegance. It features a powerful twin-turbo V8 engine and advanced electric motor technology.',
      specs: {
        engine: {
          type: 'Twin-Turbo V8',
          displacement: '5.0L',
          power: '1,340 hp (combined system output: 1,500 hp)',
          torque: '1,000 lb-ft',
          transmission: 'Single-Speed Transmission (Direct Drive)',
          layout: 'Mid-Engine RWD'
        },
        performance: {
          acceleration: '0-60 mph in 2.8s',
          topSpeed: '248 mph (electronically limited)',
          weight: '3,520 lbs',
          powerToWeight: '2.35 lbs/hp',
          braking: '60-0 mph in 114 ft'
        },
        interior: {
          seats: '2-Seater',
          materials: 'Luxury Leather, Carbon Fiber',
          infotainment: '9" Touchscreen',
          climate: 'Dual-Zone AC',
          audio: 'Premium Sound System',
          storage: 'Minimal Luggage Space'
        }
      }
    },


    {
      id: 8,
      name: 'One:1',
      tagline: 'The Ultimate Megacar',
      price: 'Sold out (approx. $2.8M when new)',
      image: One1,
      gallery: {
        overview: One2,
        engine: One3,
        performance: One4,
        interior: One4
      },
      description: 'The One:1 is a limited-production megacar that represents the pinnacle of Koenigsegg\'s performance and innovation. It features a powerful twin-turbo V8 engine and advanced aerodynamics.',
      specs: {
        engine: {
          type: 'Twin-Turbo V8',
          displacement: '5.0L',
          power: '1,340 hp',
          torque: '1,011 lb-ft',
          transmission: '7-Speed Dual-Clutch',
          layout: 'Mid-Engine RWD'
        },
        performance: {
          acceleration: '0-60 mph in 2.5s',
          topSpeed: '273 mph',
          weight: '2,992 lbs',
          powerToWeight: '1:1 power-to-weight ratio',
          braking: '60-0 mph in 110 ft'
        },
        interior: {
          seats: '2-Seater',
          materials: 'Alcantara, Carbon Fiber',
          infotainment: '9" Touchscreen',
          climate: 'Dual-Zone AC',
          audio: 'Premium Sound System',
          storage: 'Minimal Luggage Space'
        }
      }
    },
    
    {
      id: 9,
      name: 'CC8S',
      tagline: 'The First Koenigsegg',
      price: 'Sold out (approx. $1.6M when new)',
      image: CC8S1,
      gallery: {
        overview: CC8S2,
        engine: CC8S2,
        performance: CC8S1,
        interior: CC8S3
      },
      description: 'The CC8S is the first production car from Koenigsegg, showcasing the brand\'s innovative approach to supercar design and performance. It features a powerful V8 engine and advanced materials.',
      specs: {
        engine: {
          type: 'Supercharged V8',
          displacement: '4.7L',
          power: '655 hp',
          torque: '550 lb-ft',
          transmission: '6-Speed Manual',
          layout: 'Mid-Engine RWD'
        },
        performance: {
          acceleration: '0-60 mph in 3.4s',
          topSpeed: '186 mph (electronically limited)',
          weight: '2,865 lbs',
          powerToWeight: '4.37 lbs/hp',
          braking: '60-0 mph in 130 ft'
        },
        interior: {
          seats: '2-Seater',
          materials: 'Leather, Carbon Fiber',
          infotainment: 'Basic Audio System',
          climate: 'AC',
          storage: 'Minimal Luggage Space'
        }
      }
    },

    {
      id: 10,
      name: 'CCX',
      tagline: 'Homologated for the World',
      price: 'Sold out (approx. $2.2M when new)',
      image: CCX1,
      gallery: {
        overview: CCX3,
        engine: CCX2,
        performance: CCX4,
        interior: CCX3
      },
      description: 'The CCX is a limited-production supercar designed to meet global homologation requirements. It features a powerful twin-supercharged V8 engine and advanced aerodynamics.',
      specs: {
        engine: {
          type: 'Twin-Supercharged V8',
          displacement: '4.8L',
          power: '888 hp',
          torque: '685 lb-ft',
          transmission: '6-Speed Manual',
          layout: 'Mid-Engine RWD'
        },
        performance: {
          acceleration: '0-60 mph in 3.2s',
          topSpeed: '249 mph',
          weight: '3,200 lbs',
          powerToWeight: '3.60 lbs/hp',
          braking: '60-0 mph in 120 ft'
        },
        interior: {
          seats: '2-Seater',
          materials: 'Leather, Carbon Fiber',
          infotainment: 'Advanced Audio System',
          climate: 'Dual-Zone AC',
          storage: 'Minimal Luggage Space'
        }
      }
    },

    {
      id: 11,
      name: 'CCXR',
      tagline: 'Biofuel Super Sports Car',
      price: 'Sold out (approx. $2.6M when new)',
      image: CCXR1,
      gallery: {
        overview: CCXR4,
        engine: CCXR3,
        performance: CCXR4,
        interior: CCXR2
      },
      description: 'The CCXR is a variant of the CCX designed to run on E85 biofuel, offering increased power and reduced emissions. It features advanced engine technology and aerodynamics.',
      specs: {
        engine: {
          type: 'Twin-Supercharged V8',
          displacement: '4.8L',
          power: '1,018 hp',
          torque: '940 lb-ft',
          transmission: '6-Speed Manual',
          layout: 'Mid-Engine RWD'
        },
        performance: {
          acceleration: '0-60 mph in 2.9s',
          topSpeed: '249 mph',
          weight: '3,200 lbs',
          powerToWeight: '3.14 lbs/hp',
          braking: '60-0 mph in 120 ft'
        },
        interior: {
          seats: '2-Seater',
          materials: 'Leather, Carbon Fiber',
          infotainment: 'Advanced Audio System',
          climate: 'Dual-Zone AC',
          storage: 'Minimal Luggage Space'
        }
      }
    }

    
  ]

  const openModel = (model) => {
    setSelectedModel(model)
    setActiveTab('overview')
  }

  const closeModel = () => {
    setSelectedModel(null)
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  // Get current image based on active tab
  const getCurrentImage = () => {
    if (selectedModel && selectedModel.gallery[activeTab]) {
      return selectedModel.gallery[activeTab]
    }
    return selectedModel?.image || ''
  }

  return (
    <div id="explore" className="explore">
      <div className="explore-container">
        <div className="explore-header">
          <h1>Explore Our Models</h1>
          <p>Discover the pinnacle of automotive engineering</p>
        </div>

        <div className="models-grid">
          {models.map((model) => (
            <div key={model.id} className="model-card" onClick={() => openModel(model)}>
              <div className="model-image">
                <img src={model.image} alt={model.name} />
                <div className="model-overlay">
                  <h3>{model.name}</h3>
                  <p>{model.tagline}</p>
                  <span className="price">{model.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedModel && (
          <div className="model-modal" onClick={closeModel}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModel}>×</button>
              
              <div className="modal-header">
                <h2>{selectedModel.name}</h2>
                <span className="modal-price">{selectedModel.price}</span>
              </div>

              <div className="modal-body">
                <div className="modal-image">
                  <img 
                    src={getCurrentImage()} 
                    alt={`${selectedModel.name} - ${activeTab}`}
                    key={activeTab} // Force re-render for smooth transition
                  />
                </div>

                <div className="modal-info">
                  <div className="tab-navigation">
                    <button 
                      className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                      onClick={() => handleTabChange('overview')}
                    >
                      Overview
                    </button>
                    <button 
                      className={`tab-btn ${activeTab === 'engine' ? 'active' : ''}`}
                      onClick={() => handleTabChange('engine')}
                    >
                      Engine
                    </button>
                    <button 
                      className={`tab-btn ${activeTab === 'performance' ? 'active' : ''}`}
                      onClick={() => handleTabChange('performance')}
                    >
                      Performance
                    </button>
                    <button 
                      className={`tab-btn ${activeTab === 'interior' ? 'active' : ''}`}
                      onClick={() => handleTabChange('interior')}
                    >
                      Interior
                    </button>
                  </div>

                  <div className="tab-content">
                    {activeTab === 'overview' && (
                      <div className="overview-content">
                        <h3>About the {selectedModel.name}</h3>
                        <p>{selectedModel.description}</p>
                        <div className="key-features">
                          <div className="feature-item">
                            <span className="feature-label">Power</span>
                            <span className="feature-value">{selectedModel.specs.engine.power}</span>
                          </div>
                          <div className="feature-item">
                            <span className="feature-label">0-60 mph</span>
                            <span className="feature-value">{selectedModel.specs.performance.acceleration}</span>
                          </div>
                          <div className="feature-item">
                            <span className="feature-label">Top Speed</span>
                            <span className="feature-value">{selectedModel.specs.performance.topSpeed}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'engine' && (
                      <div className="specs-content">
                        <h3>Engine Specifications</h3>
                        <div className="specs-grid">
                          {Object.entries(selectedModel.specs.engine).map(([key, value]) => (
                            <div key={key} className="spec-item">
                              <span className="spec-label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                              <span className="spec-value">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'performance' && (
                      <div className="specs-content">
                        <h3>Performance Data</h3>
                        <div className="specs-grid">
                          {Object.entries(selectedModel.specs.performance).map(([key, value]) => (
                            <div key={key} className="spec-item">
                              <span className="spec-label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                              <span className="spec-value">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'interior' && (
                      <div className="specs-content">
                        <h3>Interior Features</h3>
                        <div className="specs-grid">
                          {Object.entries(selectedModel.specs.interior).map(([key, value]) => (
                            <div key={key} className="spec-item">
                              <span className="spec-label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                              <span className="spec-value">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Explore