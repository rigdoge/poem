import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import styles from './guestbook.module.css';

function GuestbookForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <FaUser className={styles.inputIcon} />
        <input
          type="text"
          placeholder="您的称呼"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={styles.input}
        />
      </div>
      <div className={styles.inputGroup}>
        <FaEnvelope className={styles.inputIcon} />
        <input
          type="email"
          placeholder="电子邮箱"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
      </div>
      <div className={styles.inputGroup}>
        <FaComment className={styles.inputIcon} />
        <textarea
          placeholder="留言内容"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className={styles.textarea}
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        提交留言
      </button>
    </form>
  );
}

function MessageList({ messages }) {
  return (
    <div className={styles.messageList}>
      {messages.map((message, index) => (
        <div key={index} className={styles.messageCard}>
          <div className={styles.messageHeader}>
            <span className={styles.messageName}>{message.name}</span>
            <span className={styles.messageDate}>{message.date}</span>
          </div>
          <p className={styles.messageContent}>{message.message}</p>
        </div>
      ))}
    </div>
  );
}

export default function Guestbook() {
  const [messages, setMessages] = useState([]);

  // 在组件加载时从 localStorage 读取数据
  useEffect(() => {
    const savedMessages = localStorage.getItem('guestbookMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      // 如果没有保存的数据，使用默认数据
      const defaultMessages = [
        {
          name: '张三',
          date: '2024-01-20',
          message: '很喜欢这个网站的设计，古色古香又不失现代感。',
        },
        {
          name: '李四',
          date: '2024-01-19',
          message: '通过这个网站学习了很多诗词，希望能够添加更多的作品。',
        },
      ];
      setMessages(defaultMessages);
      localStorage.setItem('guestbookMessages', JSON.stringify(defaultMessages));
    }
  }, []);

  const handleSubmit = (newMessage) => {
    const date = new Date().toISOString().split('T')[0];
    const updatedMessages = [{ ...newMessage, date }, ...messages];
    setMessages(updatedMessages);
    // 将更新后的数据保存到 localStorage
    localStorage.setItem('guestbookMessages', JSON.stringify(updatedMessages));
  };

  return (
    <Layout title="留言板" description="欢迎在此留下您的想法和建议">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>留言板</h1>
          <p className={styles.subtitle}>欢迎在此留下您的想法和建议</p>
        </div>
        <div className={styles.content}>
          <GuestbookForm onSubmit={handleSubmit} />
          <MessageList messages={messages} />
        </div>
      </div>
    </Layout>
  );
} 