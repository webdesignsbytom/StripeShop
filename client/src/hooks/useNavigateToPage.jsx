import { useNavigate } from 'react-router-dom';

const useNavigateToPage = () => {
  const navigate = useNavigate();

  const navigateToPage = (page, state = null) => {
    console.log('state: ', state);
    window.scrollTo(0, 0);
    setTimeout(() => {
      navigate(page, { replace: false, state: { post: state } });
    }, 300);
  };

  return navigateToPage;
};

export default useNavigateToPage;

// const navigateToPage = useNavigateToPage();
