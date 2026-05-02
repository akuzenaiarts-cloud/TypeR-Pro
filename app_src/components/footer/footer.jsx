import "./footer.scss";

import React from "react";
import { FiHelpCircle, FiSettings, FiFolderPlus, FiX } from "react-icons/fi";
import { MdOutlineFlipToFront } from "react-icons/md";
import { locale } from "../../utils";
import { useContext } from "../../context";
import HiddenFileInput from "../hiddenFileInput/hiddenFileInput";

const AppFooter = React.memo(function AppFooter() {
  const context = useContext();

  const openSettings = () => {
    context.dispatch({ type: "setModal", modal: "settings" });
  };
  const openHelp = () => {
    context.dispatch({ type: "setModal", modal: "help" });
  };
  const fileInputRef = React.useRef();

  const openRepository = () => {
    if (context.state.images.length) {
      context.dispatch({ type: "setImages", images: [] });
      return;
    }
    fileInputRef.current?.click();
  };

  const toggleMultiBubble = () => {
    context.dispatch({ type: "setMultiBubbleMode", value: !context.state.multiBubbleMode });
  };

  const hasRepo = Boolean(context.state.images.length);
  const mbOn = context.state.multiBubbleMode;

  return (
    <React.Fragment>
      <button
        className="footer-icon-btn"
        onClick={openHelp}
        title={locale.footerHelp || "Help"}
        aria-label={locale.footerHelp || "Help"}
      >
        <FiHelpCircle size={14} />
      </button>
      <button
        className="footer-icon-btn"
        onClick={openSettings}
        title={locale.footerSettings || "Settings"}
        aria-label={locale.footerSettings || "Settings"}
      >
        <FiSettings size={14} />
      </button>
      <button
        className={`footer-icon-btn ${hasRepo ? "is-active" : ""}`}
        onClick={openRepository}
        title={hasRepo ? (locale.footerDesyncRepo || "Disconnect image folder") : (locale.footerOpenRepo || "Open image folder")}
        aria-label={hasRepo ? (locale.footerDesyncRepo || "Disconnect image folder") : (locale.footerOpenRepo || "Open image folder")}
      >
        {hasRepo ? <FiX size={14} /> : <FiFolderPlus size={14} />}
      </button>
      <button
        className={`footer-icon-btn footer-mb-btn ${mbOn ? "is-active" : ""}`}
        onClick={toggleMultiBubble}
        title={locale.multiBubbleModeHint || "Multi-bubble mode: capture multiple selections at once"}
        aria-label={locale.multiBubbleModeHint || "Multi-bubble mode"}
      >
        <MdOutlineFlipToFront size={15} />
        <span className={`footer-mb-dot ${mbOn ? "is-on" : ""}`} />
      </button>
      <HiddenFileInput ref={fileInputRef} />
    </React.Fragment>
  );
});

export default AppFooter;
