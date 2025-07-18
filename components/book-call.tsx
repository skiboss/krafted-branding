"use client";

import { Check, CheckCircle, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";

export function BookCall() {
  return (
    <div className="bg-[url(../public/book-bg.png)] bg-cover bg-center rounded-2xl pt-16 px-10">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Book a{" "}
          <span className="text-[#541349] dark:text-purple-400"> 30-min </span>
        </h3>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex gap-2">
          Consultation Call{" "}
          <i>
            <PhoneCall />
          </i>
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-2xl">
          Get a quick audit of your business.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
          What we'd be doing for 30 mins
        </h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-transparent flex items-center justify-center">
              <CheckCircle className="w-full text-dark" />
            </div>
            <span className="text-gray-700 dark:text-gray-300">
              Actionable Insights, Fast
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-transparent flex items-center justify-center">
              <CheckCircle className="w-full text-dark" />
            </div>
            <span className="text-gray-700 dark:text-gray-300">
              Industry-Specific Growth Strategy
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-transparent flex items-center justify-center">
              <CheckCircle className="w-full text-dark" />
            </div>
            <span className="text-gray-700 dark:text-gray-300">
              Zero-Pressure Strategy Preview
            </span>
          </div>
        </div>
      </div>

      <Button className="w-full bg-fuchsia-950 border-2 text-base border-fuchsia-950 hover:bg-white text-white hover:text-fuchsia-950">
        <a href="https://calendly.com/chris-ojukoko-jnr/30min" target="_blank">Book Call</a>
      </Button>
    </div>
  );
}
