import React from 'react'
import '../style.css'
import { useFetching } from '../hooks/useFetching'

export default function EditorComponent({ onAnalyzed }) {
    const { sendRequest, loading, error } = useFetching();

    const sendCode = () => {
        const code = document.getElementById("code").value;
        handleAnalyze(code);
    }
    const handleAnalyze = async (inputText) => {
        try {

            const saveResponse = await sendRequest(
                "http://localhost:8080/api/analyze/save",
                "POST",
                { text: inputText }
            );
            console.log("Saved:", saveResponse);

            const analyzeResponse = await sendRequest(
                "http://localhost:8080/api/analyze",
                "POST",
                { text: inputText }
            );
            console.log("tokenized", analyzeResponse);
            onAnalyzed();
        } catch (err) {
            console.error("Error:", err);

        }

    };
    return (

        <div className="editor-card " aria-labelledby="editor-title">
            <div className="controls">
                <button className="btn primary" id="analyzeBtn" onClick={sendCode}>تحلیل لغوی</button>
                {/* <button className="btn" id="demoFill">نمونه درج کن</button> */}
                <div id='head'></div>
                <div className="hint">محتوا به‌صورت رشته JSON ارسال می‌شود: <code></code></div>
            </div>

            <div className="editor-wrap editor-code" role="region" aria-label="کد ادیتور">
                <div className="gutter" id="gutter">
                    1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11<br />12<br />13<br />14<br />15
                </div>
                <div className="code-area">
                    <textarea id="code" spellcheck="false"
                        placeholder="Hello World "></textarea>
                </div>
            </div>
            <div id='footer' className="meta">
                <div id="status">وضعیت: آماده</div>
                <div id="lastResp"></div>
            </div>
        </div>

    )
}
