import React from "react";

function Footer() {
  return (
    <div className="footer" id="footer">
      {/* <a href=""><img src="" alt="Github" class="icon"/></a>
        <a href=""><img src="" alt="LinkedIn" class="icon"/></a> */}
      <p id="footer-txt">
        &copy; Zach Imerzel |{" "}
        {/* <a href="mailto:zachary.imerzel@gmail.com"> Email |</a> add later using copy to clipboard*/}
        <a href="https://www.linkedin.com/in/zach-imerzel-336b9414b/" target="_blank" rel="noreferrer">
          | LinkedIn |
        </a>
        <a href="https://github.com/Zimerzel" target="_blank" rel="noreferrer">| Github |</a>{" "}
      </p>
    </div>
  );
}

export default Footer;