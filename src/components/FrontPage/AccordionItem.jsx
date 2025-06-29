import { ChevronDown, ChevronUp } from "lucide-react";

function AccordionItem({
  id,
  title,
  children,
  activeAccordion,
  setActiveAccordion,
  className,
}) {
  const isOpen = activeAccordion === id;

  const handleToggle = () => {
    setActiveAccordion(isOpen ? null : id);
  };

  return (
    <div className={`border-b border-red-300 py-3 ${className}`}>
      <button
        onClick={handleToggle}
        className="w-full flex justify-between items-center text-left font-semibold text-md text-red-700"
      >
        {title}
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {isOpen && (
        <div className="mt-2 text-xs leading-relaxed text-justify text-black">
          {children}
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
