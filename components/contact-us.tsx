"use client";

import { Check, CheckCircle, HouseIcon, Mail, Phone, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input"
import { Select } from "@radix-ui/react-select";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";

export function ContactForm() {
  return (
    /* Contact Form Section */
    //  <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-16 px-4 md:px-8 lg:px-16"> 
      <section className="bg-[#1f0104] text-white py-16 px-4 md:px-8 lg:px-16" id="contact-form">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Contact Us</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              We craft data-driven, results-obsessed strategies to grow your revenue and your brand in the e-commerce
              and healthcare industries
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Get In Touch */}
            <div>
              <h3 className="text-2xl font-bold mb-3">Get In Touch</h3>
              <p className="text-white/80 mb-8">
                Kickstart your journey to
                <br />
                visible business growth
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <HouseIcon className="h-5 w-5 text-white/80" />
                  <span>30N Gould St Ste R Sheridan, WY 82801</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-white/80" />
                  <span>+1 (307) 218-5698</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-white/80" />
                  <span><a href="mailto:hello@hraftedbranding.com">hello@kraftedbranding.com</a></span>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white/5 rounded-lg p-6">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-sm">Name</label>
                  <Input
                    placeholder="Susan Grey"
                    className="bg-white/5 border-white/20 text-white placeholder:text-[#bcbcbc]/60"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Email</label>
                  <Input
                    placeholder="sgrey@example.com"
                    className="bg-white/5 border-white/20 text-white placeholder:text-[#bcbcbc]/60"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-sm">Company Name</label>
                  <Input
                    placeholder="Your Company"
                    className="bg-white/5 border-white/20 text-white placeholder:text-[#bcbcbc]/60"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Industry</label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/20 text-white">
                      <SelectValue placeholder="Select Industry" className="text-blue" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ecommerce">E-Commerce</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm">Message</label>
                <Textarea
                  placeholder="Tell us about your project..."
                  className="bg-white/5 border-white/20 text-white placeholder:text-[#bcbcbc]/60 min-h-[120px]"
                />
              </div>

              <Button className="w-full   bg-white text-[#14010f] hover:text-white hover:bg-[#14010f] hover:border">Send Message</Button>
            </div>
          </div>
        </div>
      </section>
  );
}
