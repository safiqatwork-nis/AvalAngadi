import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react'
import avalAngadiLogo from '../../assets/aval-angadi-logo.png'
import botanicalBranch from '../../assets/decorations/botanical-branch.png'
import './Login.css'

function GoogleIcon() {
  return (
    <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.25 21.37 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.63 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  )
}

function SmallLeafIcon() {
  return (
    <svg
      className="w-[18px] h-[18px] text-[#155B3B] rotate-[-12deg] shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.5 2.5s-6.5 1-11.5 5.5S4 16 4 19.5c0 1 .5 2 1.5 2s2.5-.5 4-1.5c4-2.5 8.5-7.5 10.5-12.5.5-1.5 1.5-5 1.5-5zm-7.6 10.9c-2.8 2.2-5.4 3.9-7.2 4.7.7-1.8 2.4-4.4 4.6-7.2 2-2.5 4.5-4.8 6.7-6.2-1.3 2.5-2.5 5.9-4.1 8.7z" />
    </svg>
  )
}

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const [identifier, setIdentifier] = useState(() => {
    try {
      const savedRemember = localStorage.getItem('avalangadi_remember_me') === 'true'
      return savedRemember ? localStorage.getItem('avalangadi_saved_identifier') || '' : ''
    } catch {
      return ''
    }
  })
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(() => {
    try {
      return localStorage.getItem('avalangadi_remember_me') === 'true'
    } catch {
      return false
    }
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState(null)

  // Clear notification timer
  useEffect(() => {
    if (!notification) return undefined
    const timer = setTimeout(() => {
      setNotification(null)
    }, 4500)
    return () => clearTimeout(timer)
  }, [notification])

  const validate = () => {
    const nextErrors = {}
    const trimmedId = identifier.trim()

    if (!trimmedId) {
      nextErrors.identifier = 'Email or mobile number is required'
    } else {
      const isEmail = trimmedId.includes('@')
      if (isEmail) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(trimmedId)) {
          nextErrors.identifier = 'Please enter a valid email address'
        }
      } else {
        const cleanedDigits = trimmedId.replace(/[\s-]/g, '')
        if (!/^\d{10,12}$/.test(cleanedDigits)) {
          nextErrors.identifier = 'Please enter a valid 10-digit mobile number'
        }
      }
    }

    if (!password) {
      nextErrors.password = 'Password is required'
    } else if (password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    // Store remember me state
    try {
      if (rememberMe) {
        localStorage.setItem('avalangadi_remember_me', 'true')
        localStorage.setItem('avalangadi_saved_identifier', identifier.trim())
      } else {
        localStorage.removeItem('avalangadi_remember_me')
        localStorage.removeItem('avalangadi_saved_identifier')
      }

      // Simulate authentication check
      setTimeout(() => {
        setIsSubmitting(false)
        const displayName = identifier.includes('@')
          ? identifier.split('@')[0]
          : 'Valued Customer'

        localStorage.setItem(
          'avalangadi_session',
          JSON.stringify({
            identifier: identifier.trim(),
            name: displayName,
            loginTime: new Date().toISOString(),
          })
        )

        setNotification({
          type: 'success',
          message: `Welcome back, ${displayName}! Redirecting...`,
        })

        const destination = location.state?.from || '/profile'
        setTimeout(() => {
          navigate(destination)
        }, 1200)
      }, 700)
    } catch {
      setIsSubmitting(false)
      setNotification({
        type: 'error',
        message: 'Unable to save session. Please try again.',
      })
    }
  }

  const handleGoogleSignIn = () => {
    // Check if Google Auth is configured
    const isGoogleConfigured = Boolean(
      typeof window !== 'undefined' &&
        (window.google?.accounts?.id || import.meta.env.VITE_GOOGLE_CLIENT_ID)
    )

    if (isGoogleConfigured) {
      setNotification({
        type: 'info',
        message: 'Connecting to Google Authentication...',
      })
    } else {
      setNotification({
        type: 'info',
        message:
          'Google authentication is not yet configured for this store. Please use Email or Mobile Number to login.',
      })
    }
  }

  return (
    <div className="login-page-wrapper">
      {/* Toast Notification Alert */}
      {notification && (
        <div
          role="alert"
          className={`fixed top-6 right-6 z-50 max-w-sm rounded-xl px-4 py-3 shadow-lg border text-xs sm:text-sm font-medium transition-all transform animate-in fade-in slide-in-from-top-4 ${
            notification.type === 'success'
              ? 'bg-[#155B3B] text-white border-[#0e442a]'
              : notification.type === 'error'
              ? 'bg-[#C81020] text-white border-[#9c0a17]'
              : 'bg-[#FCF9F2] text-[#2C382B] border-[#DDD5C5]'
          }`}
        >
          {notification.message}
        </div>
      )}

      {/* Main Two-Panel Card */}
      <div className="login-card-container">
        {/* =========================================================
            LEFT PANEL - BRAND SECTION
        ========================================================== */}
        <section className="login-left-panel" aria-label="Brand Overview">
          <div className="login-left-content">
            {/* Aval Angadi Logo & Title */}
            <Link to="/" className="inline-flex items-center gap-3 group text-decoration-none" title="Go to home">
              <img
                src={avalAngadiLogo}
                alt="Aval Angadi"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-[21px] sm:text-[23px] font-bold text-[#C81020] leading-none tracking-tight">
                  Aval Angadi
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-[#4D5A4C] tracking-tight mt-0.5">
                  India's Women-Led Marketplace
                </span>
              </div>
            </Link>

            {/* Main Headline */}
            <h1 className="login-serif-title login-left-heading">
              Pure by Nature.<br />
              Real by<br />
              Tradition.
            </h1>

            {/* Supporting Copy */}
            <p className="login-left-desc">
              From the heart of Tirunelveli,<br />
              bringing you wholesome,<br />
              traditional and chemical-free<br />
              products.
            </p>

            {/* Leaf Icon with Subtle Decorative Line */}
            <div className="mt-4 sm:mt-5 flex items-center gap-2.5" aria-hidden="true">
              <SmallLeafIcon />
              <span className="h-[1.5px] w-12 bg-[#8CA483]/70 rounded-full" />
            </div>
          </div>
        </section>

        {/* =========================================================
            RIGHT PANEL - LOGIN FORM
        ========================================================== */}
        <section className="login-right-panel" aria-label="Account Login Form">
          {/* Botanical Corner Decorations */}
          <img
            src={botanicalBranch}
            alt=""
            aria-hidden="true"
            className="botanical-leaf-top-right"
          />
          <img
            src={botanicalBranch}
            alt=""
            aria-hidden="true"
            className="botanical-leaf-bottom-left"
          />

          <div className="login-form-inner">
            {/* Center Logo & Brand Name */}
            <div className="flex flex-col items-center text-center">
              <Link to="/" className="inline-flex flex-col items-center group text-decoration-none" title="Go to home">
                <img
                  src={avalAngadiLogo}
                  alt="Aval Angadi"
                  className="h-11 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
                <span className="mt-1 text-[21px] sm:text-[23px] font-bold text-[#C81020] leading-none tracking-tight">
                  Aval Angadi
                </span>
                <span className="mt-1 text-[10px] sm:text-[11px] font-medium text-[#566355] tracking-tight">
                  India's Women-Led Marketplace
                </span>
              </Link>
            </div>

            {/* Welcome Heading & Subtitle */}
            <div className="mt-5 sm:mt-6 text-center">
              <h2 className="login-serif-title login-form-heading">
                Welcome Back!
              </h2>
              <p className="login-form-subtitle">
                Login to your account and continue shopping our natural and healthy products.
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} noValidate className="mt-4 sm:mt-5 flex flex-col gap-2.5 sm:gap-3">
              {/* Field 1: Email or Mobile Number */}
              <div>
                <div className="login-input-group">
                  <span className="login-input-icon">
                    <Mail size={17} strokeWidth={1.8} />
                  </span>
                  <input
                    id="login-identifier"
                    type="text"
                    name="identifier"
                    autoComplete="username"
                    value={identifier}
                    onChange={(e) => {
                      setIdentifier(e.target.value)
                      if (errors.identifier) setErrors((prev) => ({ ...prev, identifier: '' }))
                    }}
                    placeholder="Email or Mobile Number"
                    className={`login-input ${errors.identifier ? 'has-error' : ''}`}
                    aria-invalid={Boolean(errors.identifier)}
                    aria-describedby={errors.identifier ? 'identifier-error' : undefined}
                  />
                </div>
                {errors.identifier && (
                  <p id="identifier-error" className="mt-1 pl-1 text-[11px] font-medium text-[#C81020]">
                    {errors.identifier}
                  </p>
                )}
              </div>

              {/* Field 2: Password with toggle */}
              <div>
                <div className="login-input-group">
                  <span className="login-input-icon">
                    <Lock size={17} strokeWidth={1.8} />
                  </span>
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      if (errors.password) setErrors((prev) => ({ ...prev, password: '' }))
                    }}
                    placeholder="Password"
                    className={`login-input login-input-password ${errors.password ? 'has-error' : ''}`}
                    aria-invalid={Boolean(errors.password)}
                    aria-describedby={errors.password ? 'password-error' : undefined}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="login-toggle-password-btn"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={16} strokeWidth={1.8} /> : <Eye size={16} strokeWidth={1.8} />}
                  </button>
                </div>
                {errors.password && (
                  <p id="password-error" className="mt-1 pl-1 text-[11px] font-medium text-[#C81020]">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Field 3 & 4: Remember me & Forgot password? */}
              <div className="flex items-center justify-between pt-0.5">
                <label className="login-checkbox-label">
                  <input
                    id="login-remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="login-checkbox"
                  />
                  <span>Remember me</span>
                </label>

                <Link
                  to="/forgot-password"
                  className="text-[12.5px] font-semibold text-[#155B3B] transition hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Field 5: Login Button */}
              <button
                id="login-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="login-submit-btn mt-1"
              >
                <span>{isSubmitting ? 'Logging in...' : 'Login'}</span>
                <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
              </button>

              {/* Field 6: Divider with OR */}
              <div className="login-divider">
                <span className="login-divider-text">OR</span>
              </div>

              {/* Field 7: Continue with Google */}
              <button
                id="login-google-btn"
                type="button"
                onClick={handleGoogleSignIn}
                className="login-google-btn"
              >
                <GoogleIcon />
                <span>Continue with Google</span>
              </button>

              {/* Field 8: Bottom text with Register link */}
              <div className="mt-2 text-center text-[13px] text-[#465345]">
                <span>Don't have an account? </span>
                <Link
                  to="/signup"
                  className="font-bold text-[#155B3B] transition hover:underline"
                >
                  Register
                </Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
