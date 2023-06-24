import React, { useState } from 'react';
import './styles/tailwind.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    serviceType: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFeedbackMessage("Mensagem enviada com sucesso!");
    }, 2000);
    console.log(JSON.stringify(formData));
    setFormData({
      name: '',
      email: '',
      message: '',
      phone: '',
      serviceType: '',
    });
  };

  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-700 min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-md bg-white p-6 rounded shadow mt-10">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Fale Conosco</h1>
        <p className="text-lg text-center text-gray-600 mb-8">Entre em contato conosco para obter mais informações</p>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2 text-gray-800">Informações de Contato</h2>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-2 text-blue-500"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Endereço: Rua Exemplo, 123, Cidade Exemplo
            </li>
            <li className="flex items-center text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-2 text-blue-500"
              >
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
              </svg>
              Email: exemplo@example.com
            </li>
            <li className="flex items-center text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-2 text-blue-500"
              >
                <path d="M12 2L3 9h18l-9-7zm0 20l9-7H3l9 7z" />
              </svg>
              Telefone: (123) 456-7890
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-800">Nome:</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Digite seu nome"
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-800">Email:</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Digite seu email"
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-800">Mensagem:</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              rows="4"
              placeholder="Digite sua mensagem"
              required
            ></textarea>
          </label>
          <label className="block">
            <span className="text-gray-800">Telefone:</span>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Digite seu telefone"
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-800">Tipo de Serviço:</span>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            >
              <option value="">Selecione um tipo de serviço</option>
              <option value="Web Design">Web Design</option>
              <option value="Desenvolvimento de Software">Desenvolvimento de Software</option>
              <option value="Marketing Digital">Marketing Digital</option>
            </select>
          </label>
          <button
            type="submit"
            className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
