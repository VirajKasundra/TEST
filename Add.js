
import React, { useState } from 'react';

// Simple Signup Page Component
export default function Signup() {
	const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
	const [errors, setErrors] = useState({});
	const [message, setMessage] = useState('');

	function validate() {
		const e = {};
		if (!form.name.trim()) e.name = 'Name is required';
		if (!form.email.trim()) e.email = 'Email is required';
		else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Invalid email';
		if (!form.password) e.password = 'Password is required';
		else if (form.password.length < 6) e.password = 'Password must be at least 6 characters';
		if (form.password !== form.confirm) e.confirm = 'Passwords do not match';
		return e;
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setForm(prev => ({ ...prev, [name]: value }));
	}

	function handleSubmit(e) {
		e.preventDefault();
		const v = validate();
		setErrors(v);
		if (Object.keys(v).length === 0) {
			// Placeholder: replace with real signup logic (API call)
			setMessage('Account created successfully (demo)');
			setForm({ name: '', email: '', password: '', confirm: '' });
		} else {
			setMessage('');
		}
	}

	return (
		<div style={styles.page}>
			<form onSubmit={handleSubmit} style={styles.card} noValidate>
				<h2 style={{ marginBottom: 8 }}>Sign Up</h2>
				<label style={styles.label}>Name</label>
				<input name="name" value={form.name} onChange={handleChange} style={styles.input} />
				{errors.name && <div style={styles.error}>{errors.name}</div>}

				<label style={styles.label}>Email</label>
				<input name="email" value={form.email} onChange={handleChange} style={styles.input} />
				{errors.email && <div style={styles.error}>{errors.email}</div>}

				<label style={styles.label}>Password</label>
				<input name="password" type="password" value={form.password} onChange={handleChange} style={styles.input} />
				{errors.password && <div style={styles.error}>{errors.password}</div>}

				<label style={styles.label}>Confirm Password</label>
				<input name="confirm" type="password" value={form.confirm} onChange={handleChange} style={styles.input} />
				{errors.confirm && <div style={styles.error}>{errors.confirm}</div>}

				<button type="submit" style={styles.button}>Create Account</button>
				{message && <div style={styles.success}>{message}</div>}
			</form>
		</div>
	);
}

const styles = {
	page: {
		minHeight: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		background: '#f5f7fb',
		padding: 16,
	},
	card: {
		width: 360,
		padding: 24,
		borderRadius: 8,
		background: '#fff',
		boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
		display: 'flex',
		flexDirection: 'column',
	},
	label: { marginTop: 12, marginBottom: 6, fontSize: 13, color: '#333' },
	input: { padding: '10px 12px', borderRadius: 6, border: '1px solid #ddd', fontSize: 14 },
	button: { marginTop: 18, padding: '10px 12px', borderRadius: 6, border: 'none', background: '#0066ff', color: '#fff', cursor: 'pointer', fontSize: 15 },
	error: { color: '#c00', fontSize: 12, marginTop: 6 },
	success: { color: '#0a0', fontSize: 13, marginTop: 12 }
};
