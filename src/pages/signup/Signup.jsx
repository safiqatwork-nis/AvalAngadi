import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, Mail, Phone, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react'
import avalAngadiLogo from '../../assets/aval-angadi-logo.png'
import heroNaturalProducts from '../../assets/hero-natural-products-branded.png'
import botanicalBranch from '../../assets/decorations/botanical-branch.png'
import oliveBranch from '../../assets/decorations/olive-branch.png'
import './Signup.css'

function GoogleIcon() {
  return (
    <svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.25 21.37 7.31 24 12 24z" />
      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.63 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
    </svg>
  )
}

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17 8C8 10 5.9 16.17 3.82 19.44A2 2 0 0 0 5.5 22a2 2 0 0 0 1.57-.77C8.27 19.8 10 17.5 13 16c-2.5 3-3 5-3 6h2c0-1 .5-3 3-6 .5 3.5-.5 5-1 6h2c1-2 1-5-.5-8C17 12 19 10 21 10V8c-2 0-4 .5-4 .5V8z" />
      </svg>
    ),
    label: 'Pure & Natural Products',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
    label: 'Women Empowerment',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
    label: 'Secure & Trusted Shopping',
  },
]

export default function Signup() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    if (!notification) return undefined
    const timer = setTimeout(() => setNotification(null), 4500)
    return () => clearTimeout(timer)
  }, [notification])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const nextErrors = {}
    const trimmedName = form.fullName.trim()
    const trimmedEmail = form.email.trim()
    const trimmedMobile = form.mobile.trim()

    if (!trimmedName) {
      nextErrors.fullName = 'Full name is required'
    } else if (trimmedName.length < 2) {
      nextErrors.fullName = 'Name must be at least 2 characters'
    }

    if (!trimmedEmail) {
      nextErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = 'Please enter a valid email address'
    }

    if (!trimmedMobile) {
      nextErrors.mobile = 'Mobile number is required'
    } else {
      const digits = trimmedMobile.replace(/[\s-]/g, '')
      if (!/^\d{10,12}$/.test(digits)) {
        nextErrors.mobile = 'Please enter a valid 10-digit mobile number'
      }
    }

    if (!form.password) {
      nextErrors.password = 'Password is required'
    } else if (form.password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters'
    }

    if (!form.confirmPassword) {
      nextErrors.confirmPassword = 'Please confirm your password'
    } else if (form.password !== form.confirmPassword) {
      nextErrors.confirmPassword = 'Passwords do not match'
    }

    if (!form.agreeTerms) {
      nextErrors.agreeTerms = 'You must agree to the Terms & Conditions and Privacy Policy'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      const displayName = form.fullName.trim().split(' ')[0]
      try {
        localStorage.setItem(
          'avalangadi_session',
          JSON.stringify({
            identifier: form.email.trim(),
            name: displayName,
            loginTime: new Date().toISOString(),
          })
        )
      } catch {
        // ignore storage errors
      }
      setNotification({
        type: 'success',
        message: `Welcome, ${displayName}! Your account has been created. Redirecting...`,
      })
      setTimeout(() => navigate('/'), 1200)
    }, 700)
  }

  const handleGoogleSignUp = () => {
    const isConfigured = Boolean(
      typeof window !== 'undefined' &&
        (window.google?.accounts?.id || import.meta.env.VITE_GOOGLE_CLIENT_ID)
    )
    setNotification({
      type: 'info',
      message: isConfigured
        ? 'Connecting to Google Authentication...'
        : 'Google sign-up is not yet configured. Please register with email.',
    })
  }

  return (
    <div className="signup-page-wrapper">
      {/* Corner Leaf Decorations */}
      <img src={oliveBranch} alt="" aria-hidden="true" className="signup-leaf-top-right" />
      <img src={botanicalBranch} alt="" aria-hidden="true" className="signup-leaf-bottom-right" />

      {/* Toast Notification */}
      {notification && (
        <div
          role="alert"
          className={`signup-toast ${
            notification.type === 'success'
              ? 'signup-toast--success'
              : notification.type === 'error'
              ? 'signup-toast--error'
              : 'signup-toast--info'
          }`}
        >
          {notification.message}
        </div>
      )}

      {/* Main Two-Panel Layout */}
      <div className="signup-container">
        {/* LEFT PANEL */}
        <section
          className="signup-left-panel"
          style={{ '--hero-img': `url(${heroNaturalProducts})` }}
          aria-label="Why join Aval Angadi"
        >
          <div className="signup-left-content">
            {/* Logo */}
            <Link to="/" className="signup-logo-link" title="Go to home">
              <img src={avalAngadiLogo} alt="Aval Angadi" className="signup-logo-img" />
              <div className="signup-logo-divider" aria-hidden="true" />
              <div className="signup-logo-text">
                <span className="signup-logo-name">Aval Angadi</span>
                <span className="signup-logo-tagline">India's Women-Led Marketplace</span>
              </div>
            </Link>

            {/* Heading */}
            <h1 className="signup-left-heading">
              Join the<br />
              Aval Angadi<br />
              Family
            </h1>

            {/* Sub-description */}
            <p className="signup-left-desc">
              Create your account and be a part of our journey towards healthy and sustainable living.
            </p>

            {/* Feature bullets */}
            <ul className="signup-features-list" aria-label="Platform highlights">
              {FEATURES.map((f) => (
                <li key={f.label} className="signup-feature-item">
                  <span className="signup-feature-icon" aria-hidden="true">{f.icon}</span>
                  <span className="signup-feature-label">{f.label}</span>
                </li>
              ))}
            </ul>

            {/* Bottom tagline */}
            <p className="signup-left-tagline" aria-hidden="true">
              — Pure by Nature. Real by Tradition.
            </p>
          </div>
        </section>

        {/* RIGHT PANEL */}
        <section className="signup-right-panel" aria-label="Create your account">
          <div className="signup-form-inner">
            {/* Logo */}
            <div className="signup-right-logo-wrap">
              <Link to="/" className="signup-right-logo-link" title="Go to home">
                <img src={avalAngadiLogo} alt="Aval Angadi" className="signup-right-logo-img" />
                <span className="signup-right-logo-name">Aval Angadi</span>
                <span className="signup-right-logo-tagline">India's Women-Led Marketplace</span>
              </Link>
            </div>

            {/* Heading */}
            <div className="signup-form-heading-wrap">
              <h2 className="signup-form-heading">Create Your Account</h2>
              <p className="signup-form-subtitle">
                Join us and be a part of our journey towards healthy and sustainable living.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="signup-form">
              {/* Full Name */}
              <div className="signup-field">
                <div className="signup-input-group">
                  <span className="signup-input-icon"><User size={16} strokeWidth={1.8} /></span>
                  <input
                    id="signup-full-name"
                    type="text"
                    name="fullName"
                    autoComplete="name"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    className={`signup-input ${errors.fullName ? 'has-error' : ''}`}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                </div>
                {errors.fullName && (
                  <p id="fullName-error" className="signup-field-error">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div className="signup-field">
                <div className="signup-input-group">
                  <span className="signup-input-icon"><Mail size={16} strokeWidth={1.8} /></span>
                  <input
                    id="signup-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    className={`signup-input ${errors.email ? 'has-error' : ''}`}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                </div>
                {errors.email && (
                  <p id="email-error" className="signup-field-error">{errors.email}</p>
                )}
              </div>

              {/* Mobile */}
              <div className="signup-field">
                <div className="signup-input-group">
                  <span className="signup-input-icon"><Phone size={16} strokeWidth={1.8} /></span>
                  <input
                    id="signup-mobile"
                    type="tel"
                    name="mobile"
                    autoComplete="tel"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number *"
                    className={`signup-input ${errors.mobile ? 'has-error' : ''}`}
                    aria-invalid={Boolean(errors.mobile)}
                    aria-describedby={errors.mobile ? 'mobile-error' : undefined}
                  />
                </div>
                {errors.mobile && (
                  <p id="mobile-error" className="signup-field-error">{errors.mobile}</p>
                )}
              </div>

              {/* Password */}
              <div className="signup-field">
                <div className="signup-input-group">
                  <span className="signup-input-icon"><Lock size={16} strokeWidth={1.8} /></span>
                  <input
                    id="signup-password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    autoComplete="new-password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password *"
                    className={`signup-input signup-input-password ${errors.password ? 'has-error' : ''}`}
                    aria-invalid={Boolean(errors.password)}
                    aria-describedby={errors.password ? 'password-error' : undefined}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="signup-toggle-password-btn"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={15} strokeWidth={1.8} /> : <Eye size={15} strokeWidth={1.8} />}
                  </button>
                </div>
                {errors.password && (
                  <p id="password-error" className="signup-field-error">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="signup-field">
                <div className="signup-input-group">
                  <span className="signup-input-icon"><Lock size={16} strokeWidth={1.8} /></span>
                  <input
                    id="signup-confirm-password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    autoComplete="new-password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password *"
                    className={`signup-input signup-input-password ${errors.confirmPassword ? 'has-error' : ''}`}
                    aria-invalid={Boolean(errors.confirmPassword)}
                    aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="signup-toggle-password-btn"
                    aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                  >
                    {showConfirmPassword ? <EyeOff size={15} strokeWidth={1.8} /> : <Eye size={15} strokeWidth={1.8} />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p id="confirmPassword-error" className="signup-field-error">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Terms */}
              <div className="signup-field">
                <label className="signup-checkbox-label">
                  <input
                    id="signup-agree-terms"
                    type="checkbox"
                    name="agreeTerms"
                    checked={form.agreeTerms}
                    onChange={handleChange}
                    className="signup-checkbox"
                  />
                  <span className="signup-checkbox-text">
                    I agree to the{' '}
                    <Link to="/terms-and-conditions" className="signup-terms-link">
                      Terms &amp; Conditions
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy-policy" className="signup-terms-link">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                {errors.agreeTerms && (
                  <p className="signup-field-error">{errors.agreeTerms}</p>
                )}
              </div>

              {/* Register Button */}
              <button
                id="signup-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="signup-submit-btn"
              >
                <span>{isSubmitting ? 'Creating account...' : 'Register'}</span>
                <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
              </button>

              {/* Divider */}
              <div className="signup-divider">
                <span className="signup-divider-text">OR</span>
              </div>

              {/* Google Sign Up */}
              <button
                id="signup-google-btn"
                type="button"
                onClick={handleGoogleSignUp}
                className="signup-google-btn"
              >
                <GoogleIcon />
                <span>Continue with Google</span>
              </button>

              {/* Login link */}
              <div className="signup-login-link">
                <span>Already have an account? </span>
                <Link to="/login" className="signup-login-anchor">Login</Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
