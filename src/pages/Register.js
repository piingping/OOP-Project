import Navbar from '../components/Navbar';
function Register() {
  const bgImgUrl = 'https://img.goodfon.com/original/1921x1081/f/fd/rimac-nevera-rimac-nevera-blue-car-fast.jpg';

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
        <h1 className='text-white'>Register</h1>
      </div>
    </div>
  );
}

export default Register;