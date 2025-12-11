import * as React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface CustomModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

const CustomModal = ({ open, onOpenChange, children }: CustomModalProps) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onOpenChange(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, onOpenChange]);

  if (!mounted || !open) return null;

  return createPortal(
    <div 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        isolation: 'isolate'
      }}
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 99998
        }}
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      
      {/* Modal Content */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          zIndex: 99999
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '42rem',
            maxHeight: '85vh',
            backgroundColor: '#ffffff',
            borderRadius: '0.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: '1px solid #e5e7eb',
            padding: '1.5rem',
            color: '#111827',
            overflow: 'hidden'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => onOpenChange(false)}
            style={{
              position: 'absolute',
              right: '1rem',
              top: '1rem',
              padding: '0.25rem',
              borderRadius: '0.25rem',
              opacity: 0.7,
              cursor: 'pointer',
              background: 'transparent',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Close"
          >
            <X style={{ width: '1rem', height: '1rem', color: '#111827' }} />
          </button>
          
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

const CustomModalHeader = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.375rem',
      textAlign: 'left',
      marginBottom: '1rem'
    }}
    {...props}
  >
    {children}
  </div>
);

const CustomModalTitle = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    style={{
      fontSize: '1.25rem',
      fontFamily: 'serif',
      color: '#111827',
      fontWeight: 600
    }}
    {...props}
  >
    {children}
  </h2>
);

const CustomModalBody = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    style={{
      maxHeight: '60vh',
      overflowY: 'auto',
      paddingRight: '0.5rem',
      color: '#4b5563'
    }}
    {...props}
  >
    {children}
  </div>
);

const CustomModalFooter = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    style={{
      paddingTop: '1rem',
      borderTop: '1px solid #e5e7eb',
      marginTop: '1rem'
    }}
    {...props}
  >
    {children}
  </div>
);

export {
  CustomModal,
  CustomModalHeader,
  CustomModalTitle,
  CustomModalBody,
  CustomModalFooter,
};
