"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";

const items = [
  {
    question: "What is the purpose of our sales monitoring tool?",
    answer:
      "Our sales monitoring tool helps you track sales performance in real-time, allowing you to make informed decisions based on data insights and trends.",
  },
  {
    question: "How can I customize the dashboard?",
    answer:
      "You can easily customize the dashboard by selecting the metrics that matter most to you, ensuring you have a personalized view of your sales data.",
  },
  {
    question: "Is there a mobile version of the tool?",
    answer:
      "Yes, our sales monitoring tool is fully responsive and can be accessed on any device, including smartphones and tablets.",
  },
  {
    question: "What integrations do you offer?",
    answer:
      "We offer seamless integrations with various CRM systems and other business tools to enhance your workflow and data accessibility.",
  },
  {
    question: "How do I get support if I encounter issues?",
    answer:
      "Our support team is available 24/7 via chat and email to assist you with any questions or issues you may have.",
  },
];

export function Faq() {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base">
          Frequently Asked Questions
        </h3>
        <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Let’s Clarify Your Questions
        </h1>
        <p className="text-[#36485C] pb-[24px]">
          Discover answers to your queries and learn more about our services.
        </p>
      </div>

      <div className="lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between">
                    <p className="text-left font-medium text-[#172026] lg:text-[18px]">
                      {item.question}
                    </p>
                    <span>
                      <Image
                        src={Plus}
                        alt="See more"
                        className="h-10 w-10 lg:w-6 lg:h-6"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                  <p className="pt-2 text-[#36485C]">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}