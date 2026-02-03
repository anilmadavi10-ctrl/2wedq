
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import ChatAssistant from './components/ChatAssistant';
import { 
  Download, 
  ChevronRight, 
  ExternalLink, 
  Github, 
  Send, 
  MapPin, 
  Mail, 
  Phone,
  Briefcase
} from 'lucide-react';
import { 
  PROJECTS, 
  SKILLS, 
  EXPERIENCES, 
  SERVICES, 
  TECH_STACK_ICONS 
} from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-600/20 blur-[120px] -z-10 rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-600/10 blur-[100px] -z-10 rounded-full" />
        
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass border border-white/10 text-indigo-400 text-sm font-semibold tracking-wide uppercase">
            🚀 Open for opportunities
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Future</span> <br className="hidden md:block" /> with Modern Code.
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed">
            I'm <span className="text-white font-semibold">Nova</span>, a Full Stack Developer specializing in crafting premium digital experiences that scale. I blend Gen Z aesthetics with world-class engineering.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="#projects" className="w-full md:w-auto px-8 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
              View Work <ChevronRight className="w-4 h-4" />
            </a>
            <button className="w-full md:w-auto px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center gap-2">
              Resume <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="container mx-auto px-6 mt-20 relative">
          <div className="glass-dark rounded-[40px] border border-white/10 p-4 md:p-8 aspect-video md:aspect-[21/9] overflow-hidden group shadow-2xl">
            <div className="w-full h-full rounded-[24px] overflow-hidden relative">
               <img 
                src="https://picsum.photos/1920/1080?grayscale" 
                alt="Developer workspace" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 flex flex-wrap justify-between items-end gap-6">
                <div className="space-y-2">
                  <div className="flex gap-2">
                    {['Next.js', 'React', 'Node.js', 'Docker'].map(t => (
                      <span key={t} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-mono">{t}</span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold">Premium Engineering.</h3>
                </div>
                <div className="flex items-center gap-8 text-zinc-400">
                  <div className="text-center">
                    <p className="text-white text-2xl font-black">25+</p>
                    <p className="text-xs uppercase tracking-widest">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white text-2xl font-black">4+</p>
                    <p className="text-xs uppercase tracking-widest">Years Exp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full aspect-square rounded-[40px] bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-[38px] overflow-hidden bg-zinc-900">
                  <img src="https://picsum.photos/800/800?random=10" alt="Nova Profile" className="w-full h-full object-cover opacity-80" />
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 glass-dark p-6 rounded-3xl border border-white/10 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase font-bold tracking-tighter">Availability</p>
                    <p className="font-bold">Freelance / Fulltime</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-indigo-400 font-bold mb-4 uppercase tracking-[0.2em] text-sm">About Me</h2>
                <h3 className="text-4xl font-black leading-tight">I design and code systems that <span className="text-zinc-500 italic">actually work</span>.</h3>
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Based in the digital cloud, I've spent the last 4 years obsessing over pixels and logic. My mission is to bridge the gap between high-end design and robust backend architecture. 
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                When I'm not pushing commits, I'm exploring the latest in AI, contributing to open source, or hunting for the perfect dark mode syntax theme.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-xl">Full Stack</h4>
                  <p className="text-zinc-500 text-sm">End-to-end expertise from UI to database scaling.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-xl">AI Native</h4>
                  <p className="text-zinc-500 text-sm">Integrating LLMs and intelligent agents into UX.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-indigo-400 font-bold mb-4 uppercase tracking-[0.2em] text-sm">Technical Arsenal</h2>
            <h3 className="text-4xl font-black">Mastered Skills</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {(['Frontend', 'Backend', 'Database', 'Tools'] as const).map(category => (
              <div key={category} className="space-y-6">
                <h4 className="text-xl font-bold border-b border-zinc-800 pb-2 mb-6 text-zinc-300">{category}</h4>
                {SKILLS.filter(s => s.category === category).map(skill => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-zinc-400">{skill.name}</span>
                      <span className="text-indigo-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <h2 className="text-indigo-400 font-bold mb-4 uppercase tracking-[0.2em] text-sm">Featured Work</h2>
              <h3 className="text-4xl font-black">Digital Masterpieces</h3>
            </div>
            <button className="text-indigo-400 font-bold flex items-center gap-2 group">
              View All Projects <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map(project => (
              <div key={project.id} className="group glass-dark rounded-[32px] overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map(tech => (
                      <span key={tech} className="text-[10px] uppercase font-bold tracking-widest text-indigo-300 px-2 py-1 bg-indigo-500/10 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                  <p className="text-zinc-400 text-sm mb-6 line-clamp-2">{project.description}</p>
                  <div className="flex gap-4">
                    <a href={project.liveUrl} className="flex-1 py-3 bg-white text-black text-center text-sm font-bold rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                      Live <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a href={project.githubUrl} className="p-3 glass rounded-xl hover:bg-white/10 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-indigo-400 font-bold mb-4 uppercase tracking-[0.2em] text-sm">My Journey</h2>
              <h3 className="text-4xl font-black">Experience & Internships</h3>
            </div>
            
            <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:top-4 before:bottom-4 before:w-[1px] before:bg-zinc-800">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] md:left-1/2 md:translate-x-[-50%] top-2 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
                  
                  <div className="md:w-1/2" />
                  <div className="md:w-1/2 glass-dark p-8 rounded-3xl border border-white/5 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-bold">{exp.role}</h4>
                        <p className="text-indigo-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-xs font-mono text-zinc-500 px-3 py-1 bg-zinc-900 rounded-full">{exp.period}</span>
                    </div>
                    <ul className="space-y-2 text-zinc-400 text-sm list-disc pl-4">
                      {exp.description.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-indigo-400 font-bold mb-4 uppercase tracking-[0.2em] text-sm">Services</h2>
            <h3 className="text-4xl font-black">Specialized Offerings</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map(service => (
              <div key={service.title} className="p-10 glass-dark rounded-[32px] border border-white/5 hover:border-indigo-500/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600 transition-all">
                  <div className="text-indigo-400 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Horizontal Scroll */}
      <div className="py-12 border-y border-white/5 bg-zinc-950 overflow-hidden">
        <div className="flex gap-16 animate-infinite-scroll whitespace-nowrap px-6">
          {[...TECH_STACK_ICONS, ...TECH_STACK_ICONS].map((icon, i) => (
            <div key={i} className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity cursor-default grayscale hover:grayscale-0">
              <img src={icon.icon} alt={icon.name} className="w-8 h-8" />
              <span className="font-bold text-xl uppercase tracking-tighter">{icon.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] -z-10 rounded-full" />
        
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto glass-dark rounded-[48px] overflow-hidden border border-white/10">
            <div className="grid md:grid-cols-2">
              {/* Left Side: Info */}
              <div className="p-10 md:p-16 space-y-12 bg-indigo-600/5">
                <div>
                  <h3 className="text-4xl font-black mb-6">Let's build <br /> something <span className="text-indigo-400">epic</span>.</h3>
                  <p className="text-zinc-400 leading-relaxed max-w-sm">
                    Have an idea that needs to be scaled? Or just want to talk about the latest tech trends? Hit me up.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                      <Mail className="w-5 h-5 text-indigo-400 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 font-bold uppercase">Email Me</p>
                      <p className="font-bold text-lg">hello@nova.dev</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                      <Phone className="w-5 h-5 text-indigo-400 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 font-bold uppercase">Call Me</p>
                      <p className="font-bold text-lg">+1 (555) 000-0000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                      <MapPin className="w-5 h-5 text-indigo-400 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 font-bold uppercase">Location</p>
                      <p className="font-bold text-lg">San Francisco, CA</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <p className="text-xs text-zinc-500 font-bold uppercase mb-4">Follow My Codes</p>
                  <div className="flex gap-4">
                    {['github', 'linkedin', 'twitter'].map(social => (
                      <a key={social} href="#" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
                        <span className="capitalize text-sm font-bold">{social[0]}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="p-10 md:p-16">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-400">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-400">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400">Subject</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all appearance-none">
                      <option className="bg-zinc-900">General Inquiry</option>
                      <option className="bg-zinc-900">Project Proposal</option>
                      <option className="bg-zinc-900">Collaboration</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400">Message</label>
                    <textarea rows={5} placeholder="Tell me about your project..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all resize-none"></textarea>
                  </div>
                  <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 text-center space-y-6">
          <p className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            NOVA.
          </p>
          <p className="text-zinc-500 text-sm">
            © 2024 Nova Dev Studio. Built with React & 💜
          </p>
          <div className="flex justify-center gap-8 text-xs text-zinc-600 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">TOS</a>
            <a href="#" className="hover:text-white transition-colors">Changelog</a>
          </div>
        </div>
      </footer>

      {/* Floating AI Assistant */}
      <ChatAssistant />
      
      {/* Scroll to Top UI (Mock) */}
      <div className="fixed left-6 bottom-6 hidden md:block">
        <div className="h-32 w-[1px] bg-zinc-800 mx-auto relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-4 vertical-text text-[10px] text-zinc-600 uppercase font-bold tracking-[0.3em]">
            Keep Scrolling
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
