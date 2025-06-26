const dadosDoDia = {
    consultas: 24,
    pacientes: 18,
    medicos: 5
  };
  
  window.onload = () => {
    document.getElementById('consultas').textContent = dadosDoDia.consultas;
    document.getElementById('pacientes').textContent = dadosDoDia.pacientes;
    document.getElementById('medicos').textContent = dadosDoDia.medicos;
  };