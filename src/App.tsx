/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  ShoppingBag, 
  BarChart3, 
  Target, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  Globe, 
  Smartphone, 
  Layout, 
  Search, 
  Users, 
  MessageSquare,
  Star,
  Quote,
  ChevronRight,
  Monitor,
  MousePointer2,
  Mail,
  Palette
} from 'lucide-react';
import { motion, AnimatePresence, useInView, animate } from 'motion/react';

const Counter = ({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        onUpdate: (latest) => setDisplayValue(latest),
        ease: "easeOut"
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-slate-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-slate-900">Ecom<span className="text-emerald-600">Soll</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#process" className="hover:text-blue-600 transition-colors">Process</a>
          <a href="#results" className="hover:text-blue-600 transition-colors">Results</a>
          <a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a>
        </div>

        <div className="hidden md:block">
          <button className="bg-blue-600 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-md shadow-blue-600/20">
            Book a Strategy Call
          </button>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            <a href="#services" className="text-lg font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#process" className="text-lg font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Process</a>
            <a href="#results" className="text-lg font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Results</a>
            <a href="#testimonials" className="text-lg font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
            <button className="bg-blue-600 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl text-center font-bold transition-colors">
              Book a Strategy Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden dashboard-grid">
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-full max-w-4xl h-[500px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
            360° Ecommerce Growth Agency
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-8 max-w-4xl mx-auto text-slate-900">
            Build, Optimize, and Scale Your <span className="gradient-text">Ecommerce Brand.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            EcomSoll helps ecommerce brands grow faster with high-converting stores, data-driven marketing, and scalable growth systems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-600/20">
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#services" className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold transition-all text-slate-900 shadow-sm flex items-center justify-center">
              View Our Services
            </a>
          </div>
        </motion.div>

        {/* Dashboard Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="glass-card p-4 md:p-8 aspect-[16/9] overflow-hidden shadow-2xl shadow-slate-200">
            <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
              </div>
              <div className="text-xs text-slate-400 font-mono">analytics.ecomsoll.io/dashboard</div>
              <div className="w-10" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Total Revenue', value: '$428,590', growth: '+24.5%', icon: TrendingUp, color: 'text-emerald-600' },
                { label: 'Conversion Rate', value: '4.82%', growth: '+1.2%', icon: Target, color: 'text-blue-600' },
                { label: 'Avg. Order Value', value: '$84.20', growth: '+12.4%', icon: ShoppingBag, color: 'text-indigo-600' },
              ].map((stat, i) => (stat && (
                <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">{stat.growth}</span>
                  </div>
                  <div className="text-sm text-slate-500 mb-1">{stat.label}</div>
                  <div className="text-2xl font-display font-bold text-slate-900">{stat.value}</div>
                </div>
              )))}
            </div>
            
            <div className="mt-8 h-48 bg-slate-50 rounded-xl border border-slate-100 relative overflow-hidden">
               {/* Simple SVG Chart */}
               <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
                 <path 
                   d="M0,150 Q100,120 200,160 T400,100 T600,130 T800,60 T1000,80 L1000,200 L0,200 Z" 
                   fill="url(#grad)" 
                   className="opacity-10"
                 />
                 <path 
                   d="M0,150 Q100,120 200,160 T400,100 T600,130 T800,60 T1000,80" 
                   fill="none" 
                   stroke="#2563eb" 
                   strokeWidth="3"
                 />
                 <defs>
                   <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                     <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 0.5 }} />
                     <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 0 }} />
                   </linearGradient>
                 </defs>
               </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const problems = [
    { title: 'Low Converting Stores', desc: 'Beautiful sites that don\'t sell. We fix the UX leaks.' },
    { title: 'Unprofitable Ads', desc: 'Burning budget on Meta/Google without ROAS. We optimize for profit.' },
    { title: 'Poor Branding', desc: 'Looking like a commodity. We build brands that people love.' },
    { title: 'No Growth Strategy', desc: 'Scaling without a plan is gambling. We build data-driven systems.' },
    { title: 'Inefficient Systems', desc: 'Manual work slowing you down. We automate your ecommerce stack.' },
  ];

  return (
    <section className="py-24 section-bg-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight text-slate-900">
              Ecommerce is harder than ever. <br />
              <span className="text-slate-400">We solve the struggles.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Most brands fail because they focus on the wrong metrics. We bridge the gap between "having a store" and "having a business."
            </p>
            <div className="space-y-4">
              {problems.map((p, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-all group shadow-sm hover:shadow-md border border-transparent hover:border-slate-100">
                  <div className="mt-1 p-1 bg-red-50 rounded text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
                    <X className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-slate-900">{p.title}</h4>
                    <p className="text-sm text-slate-500">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="glass-card p-8 relative z-10 bg-white shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-500">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Current Performance</div>
                  <div className="text-xl font-bold text-slate-900">Stagnant Growth</div>
                </div>
              </div>
              
              <div className="space-y-6">
                {[
                  { label: 'Ad Spend Waste', value: '64%', color: 'bg-red-500' },
                  { label: 'Cart Abandonment', value: '82%', color: 'bg-red-500' },
                  { label: 'Customer Retention', value: '12%', color: 'bg-red-500' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600">{item.label}</span>
                      <span className="font-bold text-red-500">{item.value}</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: item.value }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className={`h-full ${item.color}`} 
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-4 bg-blue-50 border border-blue-100 rounded-xl flex items-center gap-4">
                <Zap className="w-6 h-6 text-blue-600" />
                <p className="text-sm font-medium text-blue-700">We turn these red bars into blue-chip growth.</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/5 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/5 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'E-commerce Development',
      desc: 'High-converting stores built on Shopify Plus with custom UX/UI and speed optimization.',
      icon: Layout,
      features: ['Shopify Plus Experts', 'Custom Theme Dev', 'Speed & Performance']
    },
    {
      title: 'Paid Acquisition',
      desc: 'Scaling revenue with performance-driven Meta, Google, TikTok, and Amazon ads.',
      icon: TrendingUp,
      features: ['Meta & TikTok Ads', 'Google Shopping', 'Amazon Advertising']
    },
    {
      title: 'Retention & Lifecycle',
      desc: 'Advanced Klaviyo flows and SMS marketing to maximize customer lifetime value.',
      icon: Mail,
      features: ['Email Automation', 'SMS Marketing', 'Loyalty Programs']
    },
    {
      title: 'Influencer & Affiliate',
      desc: 'End-to-end influencer seeding, whitelisting, and affiliate program management.',
      icon: Users,
      features: ['Influencer Seeding', 'Paid Whitelisting', 'Affiliate Systems']
    },
    {
      title: 'Creative Strategy',
      desc: 'High-converting UGC production, professional editing, and performance ad design.',
      icon: Palette,
      features: ['UGC Production', 'Video Editing', 'Ad Creative Design']
    },
    {
      title: 'Conversion Optimization',
      desc: 'Data-driven A/B testing and landing page design to squeeze more profit from your traffic.',
      icon: MousePointer2,
      features: ['CRO Audits', 'A/B Testing', 'Landing Page Design']
    },
    {
      title: 'SEO & Organic Growth',
      desc: 'Technical SEO and content strategy to build sustainable organic revenue streams.',
      icon: Search,
      features: ['Technical SEO', 'Content Strategy', 'Organic Social']
    },
    {
      title: 'Strategy & Analytics',
      desc: 'Full-funnel P&L analysis, attribution modeling, and scalable growth roadmaps.',
      icon: BarChart3,
      features: ['P&L Analysis', 'Data Attribution', 'Growth Roadmaps']
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900">Everything Your Brand Needs to Scale</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            We provide a comprehensive suite of services designed to take your ecommerce brand from 6 to 8 figures.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 hover:shadow-xl transition-all group bg-white border border-slate-100"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">{s.title}</h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      num: '01',
      title: 'Audit Your Brand',
      desc: 'We dive deep into your data, store UX, and ad accounts to find growth opportunities.'
    },
    {
      num: '02',
      title: 'Build Growth Systems',
      desc: 'We optimize your store and set up high-converting marketing funnels.'
    },
    {
      num: '03',
      title: 'Scale Revenue',
      desc: 'We scale your brand with data-driven marketing and continuous optimization.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-slate-900">Our Proven Process</h2>
            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-5xl font-display font-black text-blue-600/10">{step.num}</div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 text-slate-900">{step.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="glass-card p-4 overflow-hidden bg-white shadow-xl">
               <img 
                 src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                 alt="Process visualization" 
                 className="rounded-xl opacity-90 transition-all duration-700"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-2xl text-white font-bold shadow-xl">
              <div className="text-3xl">90 Days</div>
              <div className="text-xs uppercase tracking-wider opacity-80">To Significant Scale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { name: 'Fashion & Apparel', icon: ShoppingBag },
    { name: 'Beauty & Skincare', icon: Star },
    { name: 'Lifestyle Products', icon: Globe },
    { name: 'D2C Startups', icon: Zap },
  ];

  return (
    <section className="py-24 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-12">Industries We Scale</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industries.map((ind, i) => (
            <div key={i} className="flex flex-col items-center gap-4 group cursor-default">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <ind.icon className="w-8 h-8 text-slate-300 group-hover:text-blue-600 transition-colors" />
              </div>
              <span className="font-bold text-slate-400 group-hover:text-slate-900 transition-colors">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  const metrics = [
    { label: 'Avg. Revenue Growth', value: 312, suffix: '%', sub: 'Within first 6 months' },
    { label: 'Conversion Increase', value: 48, suffix: '%', sub: 'Through CRO optimization' },
    { label: 'ROAS Improvement', value: 2.4, suffix: 'x', decimals: 1, sub: 'Across Meta & Google' },
    { label: 'Client Retention', value: 94, suffix: '%', sub: 'Long-term partnerships' },
  ];

  return (
    <section id="results" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900">Performance Driven Results</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            We don't care about vanity metrics. We care about your bottom line and sustainable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center bg-white"
            >
              <div className="text-5xl font-display font-bold text-blue-600 mb-2">
                <Counter value={m.value} suffix={m.suffix} decimals={m.decimals} />
              </div>
              <div className="text-lg font-bold mb-2 text-slate-900">{m.label}</div>
              <div className="text-sm text-slate-400">{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'Founder, Bloom Skincare',
      content: 'EcomSoll transformed our Shopify store. Our conversion rate jumped from 1.2% to 3.8% in just two months. They are true partners in our growth.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, Urban Threads',
      content: 'Scaling our Meta ads was a nightmare until we met EcomSoll. Their creative strategy is unmatched. We\'ve seen a 4x ROAS consistently.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Marketing Director, Aura Home',
      content: 'The data dashboards they built for us are game-changers. We finally know exactly where every dollar is going and how it\'s performing.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
    }
  ];

  return (
    <section id="testimonials" className="py-24 section-bg-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900">What Founders Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="glass-card p-8 relative bg-white">
              <Quote className="w-10 h-10 text-blue-600/10 absolute top-6 right-6" />
              <div className="flex items-center gap-4 mb-6">
                <img src={r.image} alt={r.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold text-slate-900">{r.name}</div>
                  <div className="text-xs text-slate-400">{r.role}</div>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed">"{r.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-[2rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-600/20">
          <div className="absolute top-0 left-0 w-full h-full dashboard-grid opacity-10" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to Scale Your <br />Ecommerce Brand?</h2>
            <p className="text-lg md:text-xl font-medium mb-12 opacity-90 max-w-2xl mx-auto">
              Book a strategy call with EcomSoll today and let's build your growth roadmap.
            </p>
            <button className="bg-white text-emerald-600 hover:bg-slate-50 px-10 py-5 rounded-full text-xl font-bold transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 mx-auto shadow-2xl">
              Book a Strategy Call
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
            <ShoppingBag className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-display font-bold tracking-tight text-slate-900">Ecom<span className="text-emerald-600">Soll</span></span>
        </div>
        
        <div className="text-sm text-slate-400">
          © 2026 EcomSoll Agency. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-slate-300 hover:text-blue-600 transition-colors"><Globe className="w-5 h-5" /></a>
          <a href="#" className="text-slate-300 hover:text-blue-600 transition-colors"><MessageSquare className="w-5 h-5" /></a>
          <a href="#" className="text-slate-300 hover:text-blue-600 transition-colors"><Users className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans selection:bg-emerald-500/30 selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <Services />
        <Process />
        <Industries />
        <Results />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

