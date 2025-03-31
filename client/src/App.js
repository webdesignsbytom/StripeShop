import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// Constants
import {
  ADMIN_PAGE_URL,
  CONTACT_PAGE_URL,
  COOKIE_TIMER,
  CookiePolicyName,
  HOME_PAGE_URL,
  LOGIN_PAGE_URL,
  MAINTENANCE_PAGE_URL,
  POLICIES_PAGE_URL,
  RESET_PASS_PAGE_URL,
  BLOG_PAGE_URL,
  SIGN_UP_PAGE_URL,
  BLOG_POST_PAGE_URL,
  CREATE_BLOG_POST_PAGE_URL,
  EDIT_BLOG_POST_PAGE_URL,
} from './utils/Constants';
// Components
import LoadingScreen from './components/utils/LoadingScreen';
// Utils
import { AuthenticateAdmin } from './utils/user/AuthenticateUser';
// Normal import for HomePage (no lazy loading)
import HomePage from './pages/home/HomePage';
import HomePageSideNav from './pages/home/HomePageSideNav';
import BlogPage from './pages/blog/BlogPage';
import BlogPostPage from './pages/blog/BlogPostPage';
import BlogPostCreationPage from './pages/blog/BlogPostCreationPage';
import BlogPostEditPage from './pages/blog/BlogPostEditPage';
// Lazy-loaded Pages
const AdminPage = lazy(() => import('./pages/admin/AdminPage'));
const MaintenancePage = lazy(() =>
  import('./pages/maintenance/MaintenancePage')
);
const ContactPage = lazy(() => import('./pages/contact/ContactPage'));
const Error404 = lazy(() => import('./pages/error/Error404'));
const ForgettenPasswordPage = lazy(() =>
  import('./pages/user/ForgettenPasswordPage')
);
const LoginPage = lazy(() => import('./users/login/LoginPage'));
const RegisterPage = lazy(() => import('./users/register/RegisterPage'));
const TermAndPoliciesPage = lazy(() =>
  import('./pages/policies/TermAndPoliciesPage')
);

// Components
const CookieConsentModal = lazy(() =>
  import('./components/modals/CookieConsentModal')
);

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAgreedToCookies, setHasAgreedToCookies] = useState(true);

  useEffect(() => {
    const cookie = localStorage.getItem(CookiePolicyName);

    if (cookie) {
      setHasAgreedToCookies(true);
    } else {
      setHasAgreedToCookies(false);
    }
  }, []);

  useEffect(() => {
    if (hasAgreedToCookies) {
      setIsVisible(false);
    }

    const timer = setTimeout(() => {
      if (!hasAgreedToCookies) {
        setIsVisible(true);
      }
    }, COOKIE_TIMER);

    return () => clearTimeout(timer);
  }, [hasAgreedToCookies]);

  return (
    <>
      {isVisible && (
        <Suspense>
          <CookieConsentModal setHasAgreedToCookies={setHasAgreedToCookies} />
        </Suspense>
      )}

      {/* Suspense component wraps the lazy-loaded components */}
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          {/* Main page routes */}
          <Route path={HOME_PAGE_URL} index element={<HomePage />} />
          
          {/* Blog routes */}
          <Route path={BLOG_PAGE_URL}  element={<BlogPage />} />
          <Route path={`${BLOG_POST_PAGE_URL}/:title`} element={<BlogPostPage />} />
          <Route
            path={CREATE_BLOG_POST_PAGE_URL}
            element={<BlogPostCreationPage />}
          />
          <Route
            path={EDIT_BLOG_POST_PAGE_URL}
            element={<BlogPostEditPage />}
          />

          {/* Eager loaded */}
          <Route path={CONTACT_PAGE_URL} element={<ContactPage />} />
          <Route path={POLICIES_PAGE_URL} element={<TermAndPoliciesPage />} />
          {/* User routes */}
          <Route path={LOGIN_PAGE_URL} element={<LoginPage />} />
          <Route path={SIGN_UP_PAGE_URL} element={<RegisterPage />} />
          <Route
            path={RESET_PASS_PAGE_URL}
            element={<ForgettenPasswordPage />}
          />
          {/* Other */}
          <Route path={MAINTENANCE_PAGE_URL} element={<MaintenancePage />} />
          {/* Secured routes */}
          <Route
            path={ADMIN_PAGE_URL}
            element={
              <AuthenticateAdmin>
                <AdminPage />
              </AuthenticateAdmin>
            }
          />
          {/* Error routes */}
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
