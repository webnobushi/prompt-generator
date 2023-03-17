import React, { useState } from "react";
import Select from "react-select";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";

const vars = {
  viewLibrary: ["react", "vue"],
  language: ["typescript", "javascript"],
  component: [
    // コンポーネントの配列をここにコピー
    'button',
    'input',
    'accordion',
    'modal',
    'card',
    'table',
    'list',
    'tabs',
    'dropdown',
    'tooltip',
    'pagination',
    'slider',
    'datepicker',
    'timepicker',
    'rating',
    'progress',
    'spinner',
    'badge',
    'alert',
    'toast',
    'avatar',
    'chip',
    'dialog',
    'menu',
    'select',
    'switch',
    'checkbox',
    'radio',
    'file',
    'image',
    'text',
    'textarea',
    'number',
    'email',
    'password',
    'search',
    'tel',
    'url',
    'color',
    'range',
    'time',
    'date',
    'datetime-local',
    'month',
    'week',

  ],
  cssLibrary: ["vanilla-extract", "styled-components", "tailwindcss"],
};

const App: React.FC = () => {
  const [viewLibrary, setViewLibrary] = useState("");
  const [language, setLanguage] = useState("");
  const [component, setComponent] = useState("");
  const [cssLibrary, setCssLibrary] = useState("");
  const [generatedPrompt, setGeneratedPrompt] = useState("");

  const generatePrompt = () => {
    const prompt = `あなたは優秀なフロントエンドエンジニアです。
これから指示する${component}コンポーネントを作成してください

詳細

利用ライブラリ：${viewLibrary}
言語： ${language}
作成したコンポーネントのストーリーブック及びテストコード
 cssライブラリ：${cssLibrary}`;
    setGeneratedPrompt(prompt);
  };

  return (
    <div className="App">
      <h1>プロンプトジェネレーター</h1>
      <Select
        options={vars.viewLibrary.map((item) => ({ label: item, value: item }))}
        onChange={(e) => setViewLibrary(e?.value || "")}
        placeholder="View Library"
      />
      <Select
        options={vars.language.map((item) => ({ label: item, value: item }))}
        onChange={(e) => setLanguage(e?.value || "")}
        placeholder="Language"
      />
      <Select
        options={vars.component.map((item) => ({ label: item, value: item }))}
        onChange={(e) => setComponent(e?.value || "")}
        placeholder="Component"
      />
      <Select
        options={vars.cssLibrary.map((item) => ({ label: item, value: item }))}
        onChange={(e) => setCssLibrary(e?.value || "")}
        placeholder="CSS Library"
      />
      <button onClick={generatePrompt}>プロンプトを生成</button>
      <CopyToClipboard text={generatedPrompt}>
        <button>クリップボードにコピー</button>
      </CopyToClipboard>
      <p>{generatedPrompt}</p>
    </div>
  );
};

export default App;
