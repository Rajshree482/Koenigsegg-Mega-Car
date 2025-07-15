import React, { useState, useEffect } from 'react';
import Jesko from '../../Assets/Jesko.jpg';
import G2 from '../../Assets/G2.jpg';
import G3 from '../../Assets/G3.jpg';
import CCX1 from '../../Assets/CCX1.jpg';
import CCXR3 from '../../Assets/CCXR3.jpg';
import G5 from '../../Assets/G5.jpg';
import One1 from '../../Assets/One1.jpg';



const Display = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPaused, setIsPaused] = useState(false);
  
  // Sample car images - using placeholder images for demo
  const carImages = [
    {
      src: G2,
      title: "Koenigsegg Jesko",
      // description: "Track-focused hypercar with revolutionary aerodynamics",
      specs: "1,600 HP • 330+ mph • Carbon Fiber Monocoque"
    },
    {
      src: G3,
      // title: "Koenigsegg Regera",
      description: "Revolutionary hybrid powertrain technology",
      specs: "1,500 HP • Direct Drive • Hybrid Innovation"
    },
    {
      src: G5,
      // title: "Koenigsegg Gemera",
      description: "The world's first Grand Tourer hybrid",
      specs: "1,700 HP • 4-Seater • Green Technology"
    },
    {
      src: CCX1,
      // title: "Koenigsegg CCX",
      description: "Lightweight supercar with exceptional performance",
      specs: "806 HP • 245 mph • Racing Heritage"
    },
    {
      src: CCXR3,
      title: "Koenigsegg CCXR",
      // description: "Enhanced aerodynamics and increased power",
      specs: "1,018 HP • 250 mph • Track Optimized"
    },
    {
      src: One1,
      title: "Koenigsegg One:1",
      // description: "The world's first megacar",
      specs: "1,360 HP • 273 mph • Track Beast"
    }
  ];

  // Auto-slide functionality with pause capability
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      handleSlideChange((prev) => (prev + 1) % carImages.length);
    }, 5000); // Slower transition for luxury feel
    
    return () => clearInterval(interval);
  }, [carImages.length, isPaused]);

  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSlideChange = (newIndex) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(typeof newIndex === 'function' ? newIndex(currentSlide) : newIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  const nextSlide = () => {
    handleSlideChange((prev) => (prev + 1) % carImages.length);
  };

  const prevSlide = () => {
    handleSlideChange((prev) => (prev - 1 + carImages.length) % carImages.length);
  };

  const goToSlide = (index) => {
    handleSlideChange(index);
  };

  return (
    <div id="display" style={{
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Video/Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${Jesko})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }} />
      </div>

      {/* Dark Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 2
      }}></div>

      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(45, 45, 45, 0.8) 100%)',
        zIndex: 3
      }}></div>

      {/* Dynamic Pattern Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, rgba(64, 224, 208, 0.08) 0%, transparent 50%),
          radial-gradient(circle at ${80 + mousePosition.x * 5}% ${20 + mousePosition.y * 5}%, rgba(64, 224, 208, 0.05) 0%, transparent 50%),
          radial-gradient(circle at ${40 + mousePosition.x * 8}% ${80 + mousePosition.y * 8}%, rgba(64, 224, 208, 0.06) 0%, transparent 50%)
        `,
        zIndex: 4,
        transition: 'background-image 0.5s ease'
      }}></div>

      {/* Main Content Container */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 5,
        padding: '0 20px'
      }}>
        
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '300',
            marginBottom: '20px',
            letterSpacing: '2px',
            color: '#ffffff',
            transform: `translateY(${mousePosition.y * 5}px)`,
            transition: 'transform 0.3s ease'
          }}>
            Legacy of Excellence
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#b0b0b0',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Three decades of pushing boundaries. Every milestone tells a story of innovation.
          </p>
        </div>

        {/* Enhanced Sliding Gallery Section - Improved Size */}
        <div 
          style={{
            position: 'relative',
            marginBottom: '80px',
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(64, 224, 208, 0.2)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gallery Container - Reduced Height */}
          <div style={{
            position: 'relative',
            height: '60vh', // Reduced from 90vh
            width: '100%',
            overflow: 'hidden'
          }}>
            {/* Slides */}
            <div style={{
              display: 'flex',
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: isTransitioning ? 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
              height: '100%',
              width: '100%'
            }}>
              {carImages.map((image, index) => (
                <div key={index} style={{
                  minWidth: '100%',
                  height: '100%',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  {/* Image Container with Better Aspect Ratio */}
                  <div style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <img 
                      src={image.src}
                      alt={image.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        transition: 'transform 0.5s ease, filter 0.5s ease',
                        filter: `brightness(${0.9 + Math.abs(mousePosition.x) * 0.1})`,
                        // Add subtle zoom on hover via parent container
                      }}
                    />
                    
                    {/* Luxury Gradient Overlay - Lighter */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.4) 100%)',
                      zIndex: 1
                    }}></div>

                    {/* Animated Accent Lines */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '5%',
                      width: '2px',
                      height: '80px',
                      background: 'linear-gradient(to bottom, transparent, #40e0d0, transparent)',
                      transform: `translateY(-50%) scaleY(${1 + Math.abs(mousePosition.y) * 0.2})`,
                      transition: 'transform 0.3s ease',
                      zIndex: 2
                    }}></div>

                    <div style={{
                      position: 'absolute',
                      top: '30%',
                      right: '8%',
                      width: '50px',
                      height: '2px',
                      background: 'linear-gradient(to right, transparent, #40e0d0, transparent)',
                      transform: `scaleX(${1 + Math.abs(mousePosition.x) * 0.3})`,
                      transition: 'transform 0.3s ease',
                      zIndex: 2
                    }}></div>

                    {/* Enhanced Content Overlay - Better Positioned */}
                    <div style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      right: '0',
                      background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.9))',
                      padding: '40px 40px 35px',
                      color: 'white',
                      zIndex: 3
                    }}>
                      <div style={{
                        maxWidth: '600px'
                      }}>
                        <h3 style={{
                          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                          marginBottom: '12px',
                          color: '#40e0d0',
                          fontWeight: '200',
                          letterSpacing: '1px',
                          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
                        }}>
                          {image.title}
                        </h3>
                        <p style={{
                          fontSize: '1.1rem',
                          color: '#e0e0e0',
                          marginBottom: '15px',
                          lineHeight: '1.5'
                        }}>
                          {image.description}
                        </p>
                        <div style={{
                          fontSize: '0.9rem',
                          color: '#b0b0b0',
                          fontFamily: 'monospace',
                          letterSpacing: '0.5px',
                          padding: '8px 0',
                          borderTop: '1px solid rgba(64, 224, 208, 0.3)'
                        }}>
                          {image.specs}
                        </div>
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div style={{
                      position: 'absolute',
                      top: '25px',
                      right: '25px',
                      width: '35px',
                      height: '35px',
                      border: '2px solid #40e0d0',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#40e0d0',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      zIndex: 4,
                      backgroundColor: 'rgba(64, 224, 208, 0.1)',
                      backdropFilter: 'blur(10px)'
                    }}>
                      {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Navigation Arrows */}
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              style={{
                position: 'absolute',
                left: '25px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(64, 224, 208, 0.15)',
                border: '2px solid rgba(64, 224, 208, 0.4)',
                color: '#40e0d0',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                cursor: isTransitioning ? 'not-allowed' : 'pointer',
                fontSize: '1.6rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                backdropFilter: 'blur(15px)',
                zIndex: 10,
                opacity: isTransitioning ? 0.5 : 1
              }}
              onMouseEnter={(e) => {
                if (!isTransitioning) {
                  e.currentTarget.style.background = 'rgba(64, 224, 208, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(64, 224, 208, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isTransitioning) {
                  e.currentTarget.style.background = 'rgba(64, 224, 208, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              style={{
                position: 'absolute',
                right: '25px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(64, 224, 208, 0.15)',
                border: '2px solid rgba(64, 224, 208, 0.4)',
                color: '#40e0d0',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                cursor: isTransitioning ? 'not-allowed' : 'pointer',
                fontSize: '1.6rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                backdropFilter: 'blur(15px)',
                zIndex: 10,
                opacity: isTransitioning ? 0.5 : 1
              }}
              onMouseEnter={(e) => {
                if (!isTransitioning) {
                  e.currentTarget.style.background = 'rgba(64, 224, 208, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(64, 224, 208, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isTransitioning) {
                  e.currentTarget.style.background = 'rgba(64, 224, 208, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              ›
            </button>
          </div>

          {/* Enhanced Slide Indicators */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px',
            padding: '25px',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)'
          }}>
            {carImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                style={{
                  width: currentSlide === index ? '35px' : '12px',
                  height: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  background: currentSlide === index 
                    ? 'linear-gradient(45deg, #40e0d0, #20b2aa)' 
                    : 'rgba(255, 255, 255, 0.3)',
                  cursor: isTransitioning ? 'not-allowed' : 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  boxShadow: currentSlide === index ? '0 4px 15px rgba(64, 224, 208, 0.4)' : 'none',
                  opacity: isTransitioning ? 0.5 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isTransitioning && currentSlide !== index) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)';
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isTransitioning && currentSlide !== index) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h3 style={{
            fontSize: '2rem',
            marginBottom: '40px',
            color: '#ffffff',
            fontWeight: '300'
          }}>
            Defining Moments
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '300',
                color: '#40e0d0',
                marginBottom: '10px'
              }}>
                15+
              </div>
              <div style={{
                color: '#b0b0b0',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                World Records
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '300',
                color: '#40e0d0',
                marginBottom: '10px'
              }}>
                30+
              </div>
              <div style={{
                color: '#b0b0b0',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Years Innovation
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '300',
                color: '#40e0d0',
                marginBottom: '10px'
              }}>
                1:1
              </div>
              <div style={{
                color: '#b0b0b0',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Power-to-Weight
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '300',
                color: '#40e0d0',
                marginBottom: '10px'
              }}>
              ∞
              </div>
              <div style={{
                color: '#b0b0b0',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Possibilities
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Quote */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px'
        }}>
          <blockquote style={{
            fontSize: '1.3rem',
            fontStyle: 'italic',
            color: '#e0e0e0',
            marginBottom: '20px',
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto 20px'
          }}>
            "Innovation is not just about technology—it's about having the courage to challenge what's possible."
          </blockquote>
          <cite style={{
            color: '#40e0d0',
            fontSize: '1rem',
            fontStyle: 'normal'
          }}>
            — Christian von Koenigsegg
          </cite>
        </div>

      </div>
    </div>
  );
};

export default Display;