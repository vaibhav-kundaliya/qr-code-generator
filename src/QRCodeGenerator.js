// QRCodeGenerator.js
import React, { useState } from "react";
import QRCode from "qrcode.react";
import "./QRCodeGenerator.css";

function QRCodeGenerator() {
    const [text, setText] = useState();
    const [error, setError] = useState();
    const handleDownload = () => {
        if (text) {
            const canvas = document.getElementById("qrcode");
            const pngUrl = canvas.toDataURL("image/png");
            const downloadLink = document.createElement("a");
            downloadLink.href = pngUrl;
            downloadLink.download = "qrcode.png";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        } else {
            setError("Please enter the text");
        }
    };

    const handleInput = (text) => {
        if (text) {
            setError();
        }
        setText(text);
    };

    return (
        <div className="qr-code-generator">
            <div>
                <input
                    style={{ height: "1.5rem" }}
                    type="text"
                    placeholder="Add your text here"
                    value={text}
                    onChange={(e) => handleInput(e.target.value)}
                    className="qr-code-input"
                />
            </div>
            <div style={{ margin: "1rem" }}>
                <QRCode id="qrcode" value={text} />
                <br />
                <button
                    onClick={ handleDownload}
                    className="download-button"
                >
                    Download QR Code
                </button>
            </div>
            {error && <p className="errorString">{error}</p>}
        </div>
    );
}

export default QRCodeGenerator;
