import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Calendar, ChevronRight, Send, Check, Heart, Shield, Clock, Users, Star, Sparkles } from 'lucide-react';

export default function ElaraCounselling() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Custom color palette
  const colors = {
    primary: '#2C5481',
    primaryDark: '#234163',
    primaryLight: '#3D6A9F',
    accent: '#C9DAD3',
    background: '#F7F9FC',
    text: '#2E2E2E'
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    showNotification('Your appointment request has been received! Our team has been notified and will contact you within 24 hours.');

    setFormData({ name: '', email: '', phone: '', date: '', message: '' });
    setIsSubmitting(false);
  };

  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 6000);
  };

  const services = [
    {
      icon: Heart,
      title: "Individual Counselling",
      description: "One-on-one sessions to address anxiety, depression, stress, self-esteem, and emotional well-being.",
    },
    {
      icon: Users,
      title: "Relationship & Marital Counselling",
      description: "Support for communication challenges, emotional disconnect, trust issues, and conflict resolution.",
    },
    {
      icon: Shield,
      title: "Stress & Burnout Management",
      description: "Tools and techniques to manage workplace stress, emotional fatigue, and overwhelm.",
    },
    {
      icon: Sparkles,
      title: "Anxiety & Emotional Regulation",
      description: "Learn practical coping strategies to manage anxiety, overthinking, and emotional triggers.",
    },
    {
      icon: Heart,
      title: "Grief & Life Transitions",
      description: "Compassionate support through loss, change, and difficult life phases.",
    }
  ];

  const whyChoose = [
    { icon: Shield, text: "Confidential & judgement-free environment" },
    { icon: Heart, text: "Professional, empathetic counselling" },
    { icon: Users, text: "Calm, welcoming space" },
    { icon: Check, text: "Personalized therapy approach" },
    { icon: Clock, text: "Flexible appointment scheduling" }
  ];

  return (
    <div className="min-h-screen font-sans relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #F7F9FC, #E6EDF5, #FFFFFF)' }}>
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 -left-4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ backgroundColor: '#2C5481' }}></div>
          <div className="absolute top-0 -right-4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" style={{ backgroundColor: '#C9DAD3' }}></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" style={{ backgroundColor: '#3D6A9F' }}></div>
        </div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              backgroundColor: 'rgba(44, 84, 129, 0.2)',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          ></div>
        ))}

        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-float-slow" style={{ background: 'linear-gradient(to bottom right, rgba(44, 84, 129, 0.3), rgba(201, 218, 211, 0.3))' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl animate-float-slow-delayed" style={{ background: 'linear-gradient(to bottom right, rgba(61, 106, 159, 0.3), rgba(44, 84, 129, 0.3))' }}></div>
      </div>

      {/* Success Notification */}
      <div className={`fixed top-24 right-4 left-4 md:left-auto md:right-6 z-50 max-w-md transform transition-all duration-700 ${
        notification.show ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full md:translate-x-[600px] opacity-0 scale-95'
      }`}>
        <div className="bg-white shadow-2xl rounded-3xl p-6 flex items-start gap-4 backdrop-blur-xl" style={{ borderLeft: '4px solid #2C5481' }}>
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg animate-bounce-gentle" style={{ background: 'linear-gradient(to bottom right, #2C5481, #234163)' }}>
            <Check className="text-white" size={24} />
          </div>
          <div className="flex-1">
            <h4 className="font-bold mb-1 text-lg" style={{ color: '#234163' }}>Booking Received!</h4>
            <p className="text-gray-700 text-sm leading-relaxed">{notification.message}</p>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      }`} style={{ borderBottom: scrolled ? '1px solid rgba(44, 84, 129, 0.1)' : 'none' }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #2C5481, #234163)', boxShadow: '0 10px 25px rgba(44, 84, 129, 0.3)' }}>
              <span className="text-2xl sm:text-3xl">🌿</span>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold" style={{ color: '#2C5481' }}>
                Elara Counselling
              </h1>
              <p className="text-xs tracking-wider hidden sm:block" style={{ color: 'rgba(44, 84, 129, 0.7)' }}>Supporting Adult Mental Health</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-gray-700 transition-all duration-300 font-medium hover-link">About</a>
            <a href="#services" className="text-gray-700 transition-all duration-300 font-medium hover-link">Services</a>
            <a href="#why-choose" className="text-gray-700 transition-all duration-300 font-medium hover-link">Why Choose Us</a>
            <a href="#contact" className="text-gray-700 transition-all duration-300 font-medium hover-link">Contact</a>
            <a href="#book" className="text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(to right, #2C5481, #234163)', boxShadow: '0 10px 25px rgba(44, 84, 129, 0.4)' }}>
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden transition-colors p-2"
            style={{ color: '#2C5481' }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl shadow-2xl animate-slide-down" style={{ borderTop: '1px solid rgba(44, 84, 129, 0.2)' }}>
            <div className="px-6 py-6 flex flex-col gap-3">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-700 py-3 transition-colors font-medium border-b border-gray-100 hover-link">About</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-gray-700 py-3 transition-colors font-medium border-b border-gray-100 hover-link">Services</a>
              <a href="#why-choose" onClick={() => setIsMenuOpen(false)} className="text-gray-700 py-3 transition-colors font-medium border-b border-gray-100 hover-link">Why Choose Us</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-700 py-3 transition-colors font-medium border-b border-gray-100 hover-link">Contact</a>
              <a href="#book" onClick={() => setIsMenuOpen(false)} className="text-white px-6 py-4 rounded-2xl font-semibold shadow-lg text-center mt-2 hover:scale-105 transition-all" style={{ background: 'linear-gradient(to right, #2C5481, #234163)' }}>
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
              <div className="inline-block">
                <span className="px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300" style={{ backgroundColor: 'rgba(44, 84, 129, 0.1)', color: '#2C5481', border: '1px solid rgba(44, 84, 129, 0.3)' }}>
                  Compassionate Adult Counselling
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span style={{ color: '#2C5481' }}>Find Balance.</span><br />
                <span style={{ color: '#234163' }}>Heal Gently.</span><br />
                <span className="text-gray-800">Move Forward.</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Elara Counselling offers compassionate, confidential adult counselling to support emotional well-being, mental clarity, and personal growth.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
                <a href="#book" className="group text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 flex items-center justify-center gap-3" style={{ background: 'linear-gradient(to right, #2C5481, #234163)', boxShadow: '0 10px 30px rgba(44, 84, 129, 0.4)' }}>
                  Book an Appointment
                  <ChevronRight className="group-hover:translate-x-2 transition-transform duration-500" size={24} />
                </a>
                <a href="#contact" className="bg-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center" style={{ border: '2px solid #2C5481', color: '#2C5481' }}>
                  Talk to Us
                </a>
              </div>
            </div>

            <div className="relative animate-fade-in-up animation-delay-200">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-700 group" style={{ boxShadow: '0 25px 50px rgba(44, 84, 129, 0.2)' }}>
                <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12" style={{ background: 'linear-gradient(to bottom right, #2C5481, #3D6A9F, #234163)' }}>
                  <div className="text-center text-white space-y-4 sm:space-y-6">
                    <div className="text-6xl sm:text-8xl mb-4 sm:mb-6 animate-float-gentle group-hover:scale-110 transition-transform duration-700">🌸</div>
                    <h3 className="text-3xl sm:text-4xl font-bold">Compassionate Care</h3>
                    <p className="text-lg sm:text-xl leading-relaxed" style={{ color: '#E6EDF5' }}>
                      A safe space for adults to heal and grow
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 rounded-full blur-2xl animate-pulse-slow" style={{ backgroundColor: 'rgba(201, 218, 211, 0.4)' }}></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 sm:w-40 sm:h-40 rounded-full blur-2xl animate-pulse-slow animation-delay-1000" style={{ backgroundColor: 'rgba(44, 84, 129, 0.2)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 bg-white/60 backdrop-blur-sm" style={{ borderTop: '1px solid rgba(44, 84, 129, 0.1)', borderBottom: '1px solid rgba(44, 84, 129, 0.1)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" style={{ color: '#2C5481' }}>
              A Safe Space for Adults to Heal
            </h2>
            <div className="w-24 sm:w-32 h-1.5 mx-auto rounded-full mb-8" style={{ background: 'linear-gradient(to right, #2C5481, #C9DAD3)' }}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 animate-fade-in-up animation-delay-100">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                At Elara Counselling, we believe that every adult deserves a safe, understanding space to explore their thoughts, emotions, and challenges. Life can feel overwhelming — relationships, work stress, anxiety, grief, or self-doubt can quietly take a toll.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our counselling approach is client-centered, empathetic, and confidential. We work at your pace, helping you build resilience, self-awareness, and emotional balance.
              </p>
            </div>

            <div className="rounded-3xl p-8 sm:p-10 shadow-2xl text-white transform hover:scale-105 transition-all duration-500 animate-fade-in-up animation-delay-200" style={{ background: 'linear-gradient(to bottom right, #2C5481, #234163)', boxShadow: '0 25px 50px rgba(44, 84, 129, 0.3)' }}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">Our Approach</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check style={{ color: '#C9DAD3' }} className="flex-shrink-0 mt-1" size={24} />
                  <span className="text-base sm:text-lg">Client-centered and empathetic counselling</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check style={{ color: '#C9DAD3' }} className="flex-shrink-0 mt-1" size={24} />
                  <span className="text-base sm:text-lg">Confidential and safe environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check style={{ color: '#C9DAD3' }} className="flex-shrink-0 mt-1" size={24} />
                  <span className="text-base sm:text-lg">Work at your own pace</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check style={{ color: '#C9DAD3' }} className="flex-shrink-0 mt-1" size={24} />
                  <span className="text-base sm:text-lg">Build resilience and self-awareness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" style={{ color: '#2C5481' }}>
              Our Services
            </h2>
            <div className="w-24 sm:w-32 h-1.5 mx-auto rounded-full mb-8" style={{ background: 'linear-gradient(to right, #2C5481, #C9DAD3)' }}></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized adult counselling tailored to your unique needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-transparent cursor-pointer animate-fade-in-up service-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-3xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #2C5481, #234163)', boxShadow: '0 10px 25px rgba(44, 84, 129, 0.4)' }}>
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 transition-colors" style={{ color: '#2C5481' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why-choose" className="py-20 sm:py-32 px-4 sm:px-6" style={{ background: 'linear-gradient(to bottom right, rgba(44, 84, 129, 0.05), rgba(201, 218, 211, 0.05), #FFFFFF)', borderTop: '1px solid rgba(44, 84, 129, 0.1)', borderBottom: '1px solid rgba(44, 84, 129, 0.1)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" style={{ color: '#2C5481' }}>
              Why Choose Elara
            </h2>
            <div className="w-24 sm:w-32 h-1.5 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #2C5481, #C9DAD3)' }}></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChoose.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s`, borderLeft: '4px solid #2C5481' }}
                >
                  <IconComponent className="mb-4 group-hover:scale-110 transition-transform duration-500" style={{ color: '#2C5481' }} size={36} />
                  <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" style={{ color: '#2C5481' }}>
              We'd Love to Hear From You
            </h2>
            <div className="w-24 sm:w-32 h-1.5 mx-auto rounded-full mb-8" style={{ background: 'linear-gradient(to right, #2C5481, #C9DAD3)' }}></div>
            <p className="text-lg sm:text-xl text-gray-600">
              Reach out to us for any queries or to schedule a visit
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up" style={{ borderTop: '4px solid #2C5481' }}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-3xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #2C5481, #234163)' }}>
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ color: '#2C5481' }}>Visit Us</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                No.2, 1st & 2nd Floor<br />
                16th Main, BTM Layout 2nd Stage<br />
                Bangalore – 560076
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up animation-delay-100" style={{ borderTop: '4px solid #2C5481' }}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-3xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #2C5481, #234163)' }}>
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ color: '#2C5481' }}>Call Us</h3>
              <a href="tel:+918015629013" className="text-gray-600 text-base sm:text-lg transition-colors font-semibold hover-link">
                +91 80156 29013
              </a>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up animation-delay-200 sm:col-span-2 lg:col-span-1" style={{ borderTop: '4px solid #2C5481' }}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-3xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #2C5481, #234163)' }}>
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ color: '#2C5481' }}>Email Us</h3>
              <a href="mailto:elarachildcarecentre@gmail.com" className="text-gray-600 text-sm sm:text-base transition-colors break-words hover-link">
                elarachildcarecentre@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Book Appointment Section */}
      <section id="book" className="py-20 sm:py-32 px-4 sm:px-6" style={{ background: 'linear-gradient(to bottom right, rgba(44, 84, 129, 0.1), rgba(201, 218, 211, 0.1), #FFFFFF)', borderTop: '1px solid rgba(44, 84, 129, 0.3)', borderBottom: '1px solid rgba(44, 84, 129, 0.3)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" style={{ color: '#2C5481' }}>
              Ready to Start Your Healing Journey?
            </h2>
            <div className="w-24 sm:w-32 h-1.5 mx-auto rounded-full mb-8" style={{ background: 'linear-gradient(to right, #2C5481, #C9DAD3)' }}></div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl animate-fade-in-up animation-delay-200" style={{ border: '1px solid rgba(44, 84, 129, 0.2)' }}>
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <label className="block font-bold mb-2 sm:mb-3 text-base sm:text-lg" style={{ color: '#2C5481' }}>Full Name *</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-2 focus:outline-none transition-all duration-300 bg-white text-base sm:text-lg input-field"
                    placeholder="Your full name"
                    style={{ borderColor: 'rgba(44, 84, 129, 0.3)' }}
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2 sm:mb-3 text-base sm:text-lg" style={{ color: '#2C5481' }}>Phone Number *</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-2 focus:outline-none transition-all duration-300 bg-white text-base sm:text-lg input-field"
                    placeholder="+91 xxxxx xxxxx"
                    style={{ borderColor: 'rgba(44, 84, 129, 0.3)' }}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <label className="block font-bold mb-2 sm:mb-3 text-base sm:text-lg" style={{ color: '#2C5481' }}>Email *</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-2 focus:outline-none transition-all duration-300 bg-white text-base sm:text-lg input-field"
                    placeholder="your.email@example.com"
                    style={{ borderColor: 'rgba(44, 84, 129, 0.3)' }}
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2 sm:mb-3 text-base sm:text-lg" style={{ color: '#2C5481' }}>Preferred Date & Time *</label>
                  <input 
                    type="datetime-local"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-2 focus:outline-none transition-all duration-300 bg-white text-base sm:text-lg input-field"
                    style={{ borderColor: 'rgba(44, 84, 129, 0.3)' }}
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold mb-2 sm:mb-3 text-base sm:text-lg" style={{ color: '#2C5481' }}>Message / Concern *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-2 focus:outline-none transition-all duration-300 bg-white resize-none text-base sm:text-lg input-field"
                  placeholder="Please share what brings you to counselling..."
                  style={{ borderColor: 'rgba(44, 84, 129, 0.3)' }}
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
                style={{ background: 'linear-gradient(to right, #2C5481, #234163)', boxShadow: '0 10px 30px rgba(44, 84, 129, 0.4)' }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Calendar size={24} />
                    Book Appointment
                  </>
                )}
              </button>

              <p className="text-center text-gray-600 text-xs sm:text-sm mt-4 flex items-center justify-center gap-2">
                <Shield size={16} />
                Your information is confidential. Our admin team will be notified instantly and will contact you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12 sm:py-16 px-4 sm:px-6" style={{ background: 'linear-gradient(to bottom right, #2C5481, #234163)', borderTop: '4px solid rgba(201, 218, 211, 0.3)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                  <span className="text-2xl sm:text-3xl">🌿</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">Elara Counselling</h3>
                  <p className="text-xs sm:text-sm" style={{ color: '#E6EDF5' }}>Adult Mental Health Support</p>
                </div>
              </div>
              <p className="leading-relaxed text-sm sm:text-base" style={{ color: '#E6EDF5' }}>
                Supporting adult mental health with compassion and care.
              </p>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Quick Links</h4>
              <div className="space-y-2 sm:space-y-3">
                <a href="#about" className="block transition-colors hover:translate-x-2 duration-300 text-sm sm:text-base footer-link" style={{ color: '#E6EDF5' }}>About</a>
                <a href="#services" className="block transition-colors hover:translate-x-2 duration-300 text-sm sm:text-base footer-link" style={{ color: '#E6EDF5' }}>Services</a>
                <a href="#book" className="block transition-colors hover:translate-x-2 duration-300 text-sm sm:text-base footer-link" style={{ color: '#E6EDF5' }}>Book Appointment</a>
                <a href="#contact" className="block transition-colors hover:translate-x-2 duration-300 text-sm sm:text-base footer-link" style={{ color: '#E6EDF5' }}>Contact</a>
              </div>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Contact</h4>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base" style={{ color: '#E6EDF5' }}>
                <p className="flex items-start gap-2">
                  <MapPin className="flex-shrink-0 mt-1" size={20} />
                  <span>No.2, 1st & 2nd Floor, 16th Main, BTM Layout 2nd Stage, Bangalore</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={20} />
                  <a href="tel:+918015629013" className="transition-colors footer-link">+91 80156 29013</a>
                </p>
                <p className="flex items-start gap-2">
                  <Mail className="flex-shrink-0 mt-1" size={20} />
                  <a href="mailto:elarachildcarecentre@gmail.com" className="transition-colors break-words footer-link">elarachildcarecentre@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 text-center" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <p className="text-sm sm:text-base" style={{ color: '#E6EDF5' }}>
              © 2026 Elara Counselling. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        * { box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        @media (max-width: 640px) {
          h1 { font-size: 2.5rem; }
          h2 { font-size: 2rem; }
        }

        /* Hover effects */
        .hover-link:hover {
          color: #2C5481 !important;
        }

        .footer-link:hover {
          color: #C9DAD3 !important;
        }

        .service-card:hover {
          border-color: rgba(44, 84, 129, 0.3) !important;
        }

        .service-card h3 {
          transition: color 0.3s ease;
        }

        .service-card:hover h3 {
          color: #234163 !important;
        }

        /* Input field focus effects */
        .input-field:focus {
          border-color: #2C5481 !important;
          box-shadow: 0 0 0 4px rgba(44, 84, 129, 0.1) !important;
        }

        .input-field:hover {
          border-color: rgba(44, 84, 129, 0.5) !important;
        }

        /* Animations */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(30px, -50px); opacity: 0.5; }
          50% { transform: translate(-20px, -80px); opacity: 0.4; }
          75% { transform: translate(40px, -30px); opacity: 0.6; }
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.05); }
        }

        @keyframes float-slow-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, 20px) scale(1.05); }
        }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .animate-blob { animation: blob 7s infinite; }
        .animate-float-particle { animation: float-particle linear infinite; }
        .animate-float-slow { animation: float-slow 20s ease-in-out infinite; }
        .animate-float-slow-delayed { animation: float-slow-delayed 20s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        .animate-slide-down { animation: slide-down 0.4s ease-out forwards; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }

        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}
