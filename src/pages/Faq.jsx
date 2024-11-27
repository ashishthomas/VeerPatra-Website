import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

function Faq() {
  const [expanded, setExpanded] = React.useState(false);
  const faq = [
    {
      "General settings":
        "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feAliquam eget maximus est, id dignissim quam.",
    },
    {
      Users:
        " Donec placerat, lectus sed mattis semper, neque lectus feugiat lectusvarius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.",
    },
    {
      "Advanced settings":
        "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
    },
    {
      "Personal data":
        " Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
    },
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="bg-gradient-to-r from-orange-400 via-white to-green-600 p-5 flex flex-col gap-4">
      {faq.map((obj, ind) => {
        const panelId = `panel${ind + 1}`;
        return (
          <Accordion
            key={panelId}
            expanded={expanded === panelId}
            onChange={handleChange(panelId)}
          >
            {Object.entries(obj).map(([title, content]) => (
              <React.Fragment key={title}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${panelId}-content`}
                  id={`${panelId}-header`}
                >
                  <Typography variant="body1" className="w-[33%] flex-shrink-0">
                    {title}
                  </Typography>
                </AccordionSummary>
                {expanded === panelId && (
                  <AccordionDetails>
                    <Typography>{content}</Typography>
                  </AccordionDetails>
                )}
              </React.Fragment>
            ))}
          </Accordion>
        );
      })}
    </div>
  );
}

export default Faq;
