import Navbar from '../components/Navbar';
function Login() {
  const bgImgUrl = 'https://img.goodfon.com/original/1920x1080/c/8b/car-space-planet-blue-black.jpg?d=1';

  return (
    <div
      style={{
        backgroundImage: `url(${bgImgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        opacity: 1, 
      }}
    >
      <Navbar />
      <div className="container mx-auto p-24">
        <h1 className='text-white'>Login</h1>
      </div>
    </div>
  );
}

export default Login;