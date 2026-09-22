"use client";

import React from "react";
import toast from "react-hot-toast";
import SectionHeading from "./section-heading";
import Section from "./section";
import SubmitBtn from "./submit-btn";
import sendEmail from "@/actions/sendEmail";
import { socialsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const fieldClass =
  "w-full rounded-md border border-rule bg-card px-3 py-2 text-[0.95rem] text-ink placeholder:text-muted/70 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <Section id="contact" ref={ref} className="mb-8">
      <SectionHeading>Contact</SectionHeading>
      <p className="text-[1.02rem] leading-relaxed">
        The quickest way to reach me is by email at{" "}
        <a className="link" href={`mailto:${socialsData.email.address}`}>
          {socialsData.email.address}
        </a>
        . You can also use the form below.
      </p>

      <form
        className="mt-6 flex flex-col gap-3 max-w-xl"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Message sent. Thank you!");
        }}
      >
        <label className="sr-only" htmlFor="senderEmail">
          Your email
        </label>
        <input
          id="senderEmail"
          className={fieldClass}
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <label className="sr-only" htmlFor="message">
          Your message
        </label>
        <textarea
          id="message"
          className={`${fieldClass} h-44 resize-y`}
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <div>
          <SubmitBtn />
        </div>
      </form>
    </Section>
  );
}
