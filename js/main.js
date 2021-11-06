// console.log('conectado...');

// DECLARO CONSULTORIO Y SUS PACIENTES
class Consultorios {
	constructor(nombreConsultorio) {
		this._nombreConsultorio = nombreConsultorio;
		this.pacientes = [];
	}
	get nombreConsultorio() {
		return this._nombreConsultorio;
	}
	set nombreConsultorio(nuevoNombre) {
		this._nombreConsultorio = nuevoNombre;
	}
	nuevoPaciente(paciente) {
		this.pacientes.push(paciente);
	}

	buscarPaciente(nombrePaciente) {
		return this.pacientes.find((pac) => pac.nombre === nombrePaciente);
	}
}

// DECLARO LOS PACIENTES
class Pacientes {
	constructor(nombre, edad, rut, diagnostico) {
		this._nombre = nombre;
		this._edad = edad;
		this._rut = rut;
		this._diagnostico = diagnostico;
	}
	// SOLO ES POSIBLE "MODIFICAR" EL DIAGNOSTICO, LOS OTROS DATOS SOLO SON "VISIBLES"
	get nombre() {
		return this._nombre;
	}
	get edad() {
		return this._edad;
	}
	get rut() {
		return this._rut;
	}
	get diagnostico() {
		return this._diagnostico;
	}
	set diagnostico(nuevoValor) {
		this._diagnostico = nuevoValor;
	}
}

// INSTANCIO NUEVO CONSULTORIO
const consultorio1 = new Consultorios('ConsultorioA');

// INSTANCIO LOS PACIENTES
const paciente1 = new Pacientes('juan', 33, '11111111-1', 'test diagnostico');
const paciente2 = new Pacientes('marco', 55, '22222222-2', 'Otro diagnostico');
const paciente3 = new Pacientes('vale', 22, '33333333-3', 'Diagn reservado');

// LOS REGISTRO EN EL CONSULTORIO
consultorio1.nuevoPaciente(paciente1);
consultorio1.nuevoPaciente(paciente2);
consultorio1.nuevoPaciente(paciente3);

// LOS CONSULTO
console.table(consultorio1.pacientes);
console.log(consultorio1.buscarPaciente('vale'));
