import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqData } from "../data/faqData";

function Faq() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="bg-gradient-to-r from-orange-400 via-white to-green-600 p-5 flex flex-col gap-4">
      {faqData.map((item, index) => {
        const panelId = `panel${index + 1}`;
        return (
          <Accordion
            key={panelId}
            expanded={expanded === panelId}
            onChange={handleChange(panelId)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${panelId}-content`}
              id={`${panelId}-header`}
            >
              <Typography variant="body1" className="w-[33%] flex-shrink-0">
                {item.title}
              </Typography>
            </AccordionSummary>
            {expanded === panelId && (
              <AccordionDetails>
                <Typography>{item.content}</Typography>
              </AccordionDetails>
            )}
          </Accordion>
        );
      })}
    </div>
  );
}

export default Faq;
