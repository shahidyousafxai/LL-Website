// Library Imports
import React, { FC, useState } from 'react';
import { Box } from '@mui/material';
// Local Imports
import Accordion from '@/components/shared/Accordion';
import { Key } from '@mui/icons-material';

interface IFAQsProps {
  faqs: any[];
}

const FAQsSection: FC<IFAQsProps> = ({ faqs }) => {
  const [openAccordionIds, setOpenAccordionIds] = useState<number[]>([]);

  const handleToggleAccordion = (id: number) => {
    if (openAccordionIds.includes(id)) {
      setOpenAccordionIds(openAccordionIds.filter((faqId) => faqId !== id));
    } else {
      setOpenAccordionIds([id]);
    }
  };
  return (
    <Box
      width={{ lg: '70%', md: '100%', sm: '100%', xs: '100%' }}
      display='flex'
      m='auto'
      mt='30px'
      mb='100px'
    >
      <Box display='flex' flexDirection='column' gap='20px' width='100%'>
        {faqs?.map((faq) => (
          <Accordion
            key={faq.id}
            isOpen={openAccordionIds.includes(faq.id)}
            title={faq.question}
            description={faq.answer}
            onClick={() => handleToggleAccordion(faq?.id)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FAQsSection;
