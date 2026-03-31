import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Instagram, Facebook, X, Send, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from './ThemeProvider';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      // Reset form state when closed
      setTimeout(() => setIsSuccess(false), 300);
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/renzcalapao12@gmail.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        
        // Auto close after 3 seconds
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-all duration-300">
      <div 
        className={cn(
          "relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-10",
          theme === 'dark' ? "bg-[#0a0a0a]" : "bg-white",
          "border border-stroke"
        )}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-surface hover:bg-stroke/80 transition-all text-muted hover:text-text-primary"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">Let's connect</h2>
          <p className="text-muted text-sm sm:text-base max-w-md mx-auto">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
          </p>
        </div>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center p-8 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 mb-8 animation-fade-in">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
            <h3 className="text-xl font-bold text-text-primary mb-2">Message Sent Successfully!</h3>
            <p className="text-muted text-center text-sm">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 mb-8"
          >
            <input type="hidden" name="_subject" value="New submission from Portfolio!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-semibold text-text-primary ml-1">Name</label>
                <input 
                  id="name"
                  name="name"
                  type="text" 
                  required
                  placeholder="John Doe" 
                  className={cn(
                    "p-3.5 rounded-2xl border border-stroke bg-surface text-text-primary outline-none focus:border-emerald-500 transition-all",
                    "placeholder:text-muted/40",
                    isSubmitting && "opacity-50 cursor-not-allowed"
                  )}
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-semibold text-text-primary ml-1">Email</label>
                <input 
                  id="email"
                  name="email"
                  type="email" 
                  required
                  placeholder="john@example.com" 
                  className={cn(
                    "p-3.5 rounded-2xl border border-stroke bg-surface text-text-primary outline-none focus:border-emerald-500 transition-all",
                    "placeholder:text-muted/40",
                    isSubmitting && "opacity-50 cursor-not-allowed"
                  )}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-semibold text-text-primary ml-1">Message</label>
              <textarea 
                id="message"
                name="message"
                required
                placeholder="How can I help you?" 
                rows={4}
                className={cn(
                  "p-3.5 rounded-2xl border border-stroke bg-surface text-text-primary outline-none focus:border-emerald-500 transition-all resize-none",
                  "placeholder:text-muted/40",
                  isSubmitting && "opacity-50 cursor-not-allowed"
                )}
                disabled={isSubmitting}
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "mt-2 w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-text-primary text-surface font-bold transition-all duration-300",
                !isSubmitting && "hover:bg-emerald-500 hover:text-white",
                isSubmitting && "opacity-70 cursor-wait"
              )}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <Send className="w-4 h-4 ml-1" />}
            </button>
          </form>
        )}

        <div className="pt-6 border-t border-stroke flex flex-col items-center gap-4">
          <p className="text-sm font-medium text-muted">Or reach out directly</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="mailto:renzcalapao12@gmail.com" className="p-3 rounded-full bg-surface border border-stroke hover:border-emerald-500 hover:text-emerald-500 transition-all group">
              <Mail className="w-5 h-5 text-muted group-hover:text-emerald-500" />
            </a>
            <a href="https://www.linkedin.com/in/suarenz/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-surface border border-stroke hover:border-emerald-500 hover:text-emerald-500 transition-all group">
              <Linkedin className="w-5 h-5 text-muted group-hover:text-emerald-500" />
            </a>
            <a href="https://github.com/Suarenz" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-surface border border-stroke hover:border-emerald-500 hover:text-emerald-500 transition-all group">
              <Github className="w-5 h-5 text-muted group-hover:text-emerald-500" />
            </a>
            <a href="https://www.instagram.com/suarenz_/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-surface border border-stroke hover:border-emerald-500 hover:text-emerald-500 transition-all group">
              <Instagram className="w-5 h-5 text-muted group-hover:text-emerald-500" />
            </a>
            <a href="https://www.facebook.com/xRenzooooo/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-surface border border-stroke hover:border-emerald-500 hover:text-emerald-500 transition-all group">
              <Facebook className="w-5 h-5 text-muted group-hover:text-emerald-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
