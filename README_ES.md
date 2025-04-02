# Codificación y Detección de Vulnerabilidades con GitHub Copilot

## 💫 Resumen
En este repositorio, exploramos las capacidades de GitHub Copilot en diversos escenarios de codificación. El enfoque está en cómo Copilot puede ayudar a escribir código, refactorizar y detectar vulnerabilidades de seguridad.

## 💻 **Codificación**

Vamos a sumergirnos en algunos ejemplos prácticos para ver cómo GitHub Copilot maneja estas tareas comunes de codificación.

Para estos ejemplos iniciales, utilizaremos el Desarrollo Basado en Comentarios (Comment-Driven Development), una forma simple pero poderosa de aprovechar Copilot. Comenzaremos escribiendo comentarios que describen lo que queremos lograr, y Copilot sugerirá automáticamente el código correspondiente.

Más adelante, también exploraremos el uso de Copilot Chat para profundizar en escenarios más complejos, donde la conversación con la IA se convierte en una parte más interactiva del proceso de desarrollo.

### Bucles

Comencemos con un bucle simple. Por ejemplo, necesitamos iterar sobre un arreglo de números en JavaScript. En lugar de escribir todo el bucle desde cero, podemos simplemente comenzar a escribir y Copilot nos ayudará a completarlo:

Primero, debemos crear un archivo `basic-snippets.ts` en la carpeta `coding`. Luego, podemos escribir un comentario describiendo lo que queremos hacer:

```typescript
// Crear un arreglo de números e itera sobre él
```

```typescript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
	console.log(number);
});
```

Como puedes ver, Copilot sugiere toda la estructura del bucle basada en el comentario, permitiéndonos avanzar rápidamente sin preocuparnos por el código repetitivo.

### Condicionales

A continuación, veamos las declaraciones condicionales. Imagina que queremos verificar si un número es par o impar en JavaScript. Copilot puede generar automáticamente todo el bloque if-else basado solo en un comentario:

```typescript
// Verificar si un número es par o impar
```

```typescript
const number = 5;

if (number % 2 === 0) {
	console.log(`${number} es par`);
} else {
	console.log(`${number} es impar`);
}
```

Copilot entiende la tarea y ofrece la lógica completa para esta verificación solo a partir del comentario inicial.

### Estructuras de Datos

Pasemos a **estructuras de datos**. Ya sea inicializando un arreglo o creando un objeto, Copilot nos ayuda sugiriendo código automáticamente. Por ejemplo, cuando necesitamos definir un arreglo e iterar sobre él en TypeScript:

```typescript
// Inicializar un arreglo de cadenas e imprimir cada cadena
```

```typescript
let fruits = ["manzana", "plátano", "naranja"];
fruits.forEach((fruit) => {
	console.log(fruit);
});
```

Copilot genera rápidamente esta estructura básica con solo unas pocas pistas del comentario.

### Funciones

Por último, veamos las funciones. Si queremos escribir una función simple para sumar dos números, Copilot puede generar el cuerpo de la función basado en un comentario como este:

```typescript
// Crear una función para sumar dos números
```

```typescript
function sum(a: number, b: number): number {
	return a + b;
}
```

Nuevamente, solo con el comentario, Copilot completa la lógica por nosotros.

En estos ejemplos, utilizamos el **Desarrollo Basado en Comentarios**, donde nuestros comentarios impulsan a Copilot a generar código. Más adelante, exploraremos Copilot Chat, que permite una experiencia de codificación más interactiva.

---

**Ahora que hemos visto cómo GitHub Copilot ayuda con fragmentos básicos de código, pasemos a algo más complejo.**

En esta sección, exploraremos cómo Copilot Chat puede ayudar a generar funciones y algoritmos complejos. Esto incluye tareas como implementar algoritmos de ordenamiento, funciones de búsqueda y realizar manipulaciones avanzadas de datos.

Una de las principales ventajas de Copilot Chat es su capacidad para ayudarte a escribir y refinar código más intrincado. Puedes hacer preguntas específicas, obtener explicaciones de conceptos algorítmicos y hacer que Copilot sugiera código que se ajuste a tus necesidades particulares.

**Ahora, pediremos a Copilot Chat que nos ayude a generar código para algunos algoritmos y funciones populares. Primero, comenzaremos con un algoritmo de ordenamiento.**

### **Algoritmo de Ordenamiento**

Usaremos **Copilot Chat** para ayudarnos a implementar un algoritmo de ordenamiento común: merge sort. Merge sort es un ejemplo clásico de un algoritmo de divide y vencerás que divide un arreglo en dos mitades, las ordena y luego las combina.

Primero, crea un archivo `complex.ts` en la carpeta `coding`. Luego, podemos pedir a Copilot Chat que nos ayude a implementar el algoritmo merge sort:

👤 Pregunta:
```plaintext
¿Cómo puedo implementar merge sort en TypeScript?
```
🤖 Respuesta de Copilot:

```plaintext
Claro, aquí tienes un plan paso a paso para implementar merge sort en TypeScript:

1. **Definir la función merge**: Esta función combinará dos arreglos ordenados en uno solo.
2. **Definir la función mergeSort**: Esta función dividirá recursivamente el arreglo en mitades y luego las combinará en orden.

Aquí está la implementación:
```

```typescript
function merge(left: number[], right: number[]): number[] {
	let result: number[] = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}

	// Concatenar los elementos restantes
	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(array: number[]): number[] {
	if (array.length <= 1) {
		return array;
	}

	const middle = Math.floor(array.length / 2);
	const left = array.slice(middle);
	const right = array.slice(0, middle);

	return merge(mergeSort(left), mergeSort(right));
}

// Ejemplo de uso:
const array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Salida: [3, 9, 10, 27, 38, 43, 82]
```

Como puedes ver, Copilot Chat proporciona toda la estructura de merge sort, incluyendo la división recursiva del arreglo y el proceso de combinación. Este es un gran ejemplo de cómo Copilot Chat ayuda a generar algoritmos complejos.



### **Funciones de Búsqueda**

A continuación, pidamos a Copilot Chat que nos ayude con una función de búsqueda: búsqueda binaria. Este es un método más eficiente para buscar en un arreglo ordenado, utilizando un enfoque de divide y vencerás similar al merge sort.

Puedes preguntar:

👤 Pregunta:
```plaintext
¿Puedes ayudarme a escribir una función de búsqueda binaria en TypeScript?
```
🤖 Respuesta de Copilot:

```plaintext
Claro, aquí tienes un plan paso a paso para implementar una función de búsqueda binaria en TypeScript:

1. **Definir la función binarySearch**: Esta función tomará un arreglo ordenado, un valor objetivo y, opcionalmente, los índices de inicio y fin.
2. **Caso Base**: Si el índice de inicio es mayor que el índice de fin, devuelve -1 (indicando que el objetivo no se encuentra).
3. **Calcular el índice medio**: Usa los índices de inicio y fin para encontrar el índice medio.
4. **Comparar el elemento medio con el objetivo**:
	- Si son iguales, devuelve el índice medio.
	- Si el objetivo es menor que el elemento medio, busca recursivamente en la mitad izquierda.
	- Si el objetivo es mayor que el elemento medio, busca recursivamente en la mitad derecha.

Aquí está la implementación:
```

```typescript
function binarySearch(
  array: number[],
  target: number,
  start: number = 0,
  end: number = array.length - 1
): number {
  if (start > end) {
    return -1;
  }

  const middle = Math.floor((start + end) / 2);

  if (array[middle] === target) {
    return middle;
  } else if (array[middle] > target) {
    return binarySearch(array, target, start, middle - 1);
  } else {
    return binarySearch(array, target, middle + 1, end);
  }
}

// Example usage:
const sortedArray = [3, 9, 10, 27, 38, 43, 82];
const target = 27;
console.log(binarySearch(sortedArray, target)); // Output: 3
```

Con esto, ahora tenemos una forma eficiente de buscar en un arreglo ordenado. Copilot Chat proporciona la función de búsqueda binaria con toda la lógica correcta, incluyendo casos límite.

### **Manipulación de Datos**

Por último, usemos Copilot Chat para ayudarnos con una tarea más compleja de manipulación de datos. Supongamos que queremos agrupar objetos por una propiedad específica en un arreglo de objetos.

👤 Pregunta:
```plaintext
¿Cómo puedo agrupar un arreglo de objetos por una propiedad específica en TypeScript?
```

🤖 Respuesta de Copilot:

```plaintext
Para agrupar un arreglo de objetos por una propiedad específica en TypeScript, puedes usar el método `reduce` para iterar a través del arreglo y construir un objeto donde cada clave sea un valor único de la propiedad especificada, y el valor correspondiente sea un arreglo de objetos que comparten ese valor de propiedad.

Aquí tienes un plan paso a paso:

1. **Definir la función**: Crea una función que tome un arreglo de objetos y la propiedad por la cual agrupar.
2. **Usar `reduce`**: Itera a través del arreglo usando el método `reduce`.
3. **Construir el objeto agrupado**: Para cada objeto, verifica si el valor de la propiedad ya existe como una clave en el objeto resultado. Si existe, agrega el objeto al arreglo en esa clave. Si no, crea un nuevo arreglo con el objeto.

Aquí está la implementación:
```

```typescript
// Group an array of objects by a specific property
function groupBy(arr, property) {
  return arr.reduce((acc, obj) => {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

// Example usage
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 },
  { name: "Eve", age: 35 },
];

let groupedByAge = groupBy(people, "age");
console.log(groupedByAge);
```

Este código toma un arreglo de objetos y los agrupa según la propiedad proporcionada. Copilot Chat crea eficientemente esta función de utilidad, que puede adaptarse a otros casos de uso.

---

**Ahora, exploremos cómo GitHub Copilot puede ayudar a generar plantillas de proyectos para varios tipos de aplicaciones.**

Crear la base de un proyecto suele ser uno de los pasos más laboriosos. Ya sea que estemos trabajando en una aplicación web o una API, hay patrones comunes, configuraciones y código base que necesitamos configurar.

Copilot puede ayudarnos a acelerar este proceso generando la estructura básica del proyecto, configurando archivos de configuración y proporcionando código inicial común para frameworks y entornos.

### Plantilla para Aplicación Web (Next.js)

Por ejemplo, supongamos que queremos crear una plantilla para una aplicación web simple con Next.js. Copilot puede ayudar a generar la estructura básica y la configuración inicial.

Para el siguiente comando, utilizaremos algunos de los agentes y comandos mencionados anteriormente. En este caso, usaremos el agente workspace y el comando new para crear un nuevo espacio de trabajo.

👤Prompt:

```plaintext
@workspace /new Crea la estructura de carpetas y una página simple index.js para una aplicación web Next.js.
```

Como puedes ver, al aprovechar el comando @workspace, Copilot genera rápidamente una estructura de carpetas completamente funcional y una configuración inicial para nuestro proyecto. Esto puede reducir drásticamente el tiempo necesario para comenzar nuevos proyectos.

### Plantilla para API (NestJS)

A continuación, intentemos crear una plantilla para una API utilizando **NestJS**. En este caso, queremos una API REST simple.

👤Prompt:

```plaintext
@workspace /new "crear una API con NestJS con una entidad llamada productos, esta entidad tiene 4 atributos: id: string, name: string, description: string, image: string, utilizando typeorm 0.3.20 para la persistencia y el adaptador de Postgres"
```

En solo unas pocas líneas, Copilot configura la estructura y la funcionalidad básica para una API en NestJS. Esta es una excelente manera de obtener rápidamente un punto de partida para una API, permitiéndonos enfocarnos en la lógica de negocio en lugar del código base.

---

### 🛠️ **Refactorización y Optimización**

En esta sección, exploraremos cómo GitHub Copilot puede ayudar en la refactorización y optimización de código existente. La refactorización es una parte esencial del desarrollo de software, ya que mejora la calidad, legibilidad y mantenibilidad del código.

> ℹ️ Para esta sección, necesitas navegar a la carpeta `refactoring` en el directorio `coding` e instalar dependencias `npm install`. Esta carpeta contiene archivos que utilizaremos para demostrar cómo Copilot puede ayudarnos a refactorizar y optimizar el código.

#### Paso 1: Detectar Código Redundante

Ejemplos comunes de código redundante incluyen:

1. **Lógica duplicada**: Repetir la misma lógica o funcionalidad en varias partes del código en lugar de reutilizarla mediante funciones, métodos o clases.
2. **Variables innecesarias**: Declarar variables que nunca se usan o asignar valores a variables que nunca cambian.
3. **Condiciones superfluas**: Incluir condiciones en estructuras de control que nunca se cumplirán o que ya están implícitas.
4. **Dependencias no utilizadas**: Importar módulos, bibliotecas o paquetes que no se usan realmente en el código.
5. **Código "muerto"**: Fragmentos de código que nunca se ejecutan, como funciones que nunca se llaman o secciones dentro de condicionales que siempre son falsas.

Problemas con el código redundante:

1. **Mantenimiento más difícil**: Si una funcionalidad se repite en varios lugares, realizar cambios se vuelve más complicado y propenso a errores.
2. **Mayor complejidad**: Más líneas de código hacen que el programa sea más difícil de leer y entender.
3. **Impacto en el rendimiento**: En algunos casos, el código redundante puede consumir más recursos de los necesarios, afectando el rendimiento de la aplicación.

👤 Solicitud:

```plaintext
¿Puedes ayudar a detectar código redundante o duplicado en este proyecto? Estoy buscando específicamente código que pueda estar repetido en diferentes funciones o áreas, o cualquier código que pueda simplificarse o refactorizarse para mejorar el rendimiento y la mantenibilidad. Avísame si entiendes mi solicitud, y luego te proporcionaré los archivos para analizar.
```

👤 Solicitud: 

```
@workspace el primer archivo para analizar es #file:userService.ts
```

👤 Solicitud: 
```
ahora, ¿puedes revisar este archivo en busca de código redundante o duplicado? #file:taskService.ts
```

Copilot te proporcionará el código mejorado, puedes probar la aplicación para verificar si todo funciona correctamente.

#### Paso 2: Optimizar Código Complejo

Optimizar código complejo implica simplificar funciones dividiéndolas en tareas más pequeñas y enfocadas, cada una con una responsabilidad clara. Reducir anidamientos profundos, evitar lógica redundante y mantener el código DRY (Don't Repeat Yourself) ayuda a agilizar el flujo de trabajo.

👤 Solicitud: 

```
@workspace ¿Puedes ayudar a optimizar el código complejo en este proyecto? Estoy buscando simplificar funciones grandes dividiéndolas en tareas más pequeñas y enfocadas, reducir anidamientos profundos y eliminar cualquier lógica redundante. Por favor, avísame si entiendes mi solicitud y te indicaré qué archivo revisar.
```

👤 Solicitud: 

```
Este archivo #file:taskController.ts tiene muchas responsabilidades, ¿puedes ayudarme a simplificarlo siguiendo la estructura del proyecto con ruta, controlador y servicio?
```

Copilot nos proporcionará el código refactorizado. Prueba la aplicación para verificar si todo funciona correctamente.

---
### **Demostrar Cómo GitHub Copilot Ayuda a Escribir Pruebas Unitarias**

En esta siguiente sección, exploraremos cómo GitHub Copilot puede asistir en la escritura de pruebas unitarias. Las pruebas unitarias son esenciales para garantizar que los componentes individuales de tu código funcionen como se espera. Ayudan a detectar errores temprano y proporcionan una red de seguridad al realizar cambios en la base de código.

Pidamos a GitHub Copilot que nos ayude a escribir pruebas unitarias para una función.

Abre el archivo `helloService.ts` y selecciona la función que deseas probar.

👤 Solicitud:

```plaintext
@workspace /tests Generar prueba unitaria para #selection
```

Ahora vamos a generar pruebas unitarias para el archivo `userService.ts`.

👤 Solicitud:

```plaintext
@workspace /tests Generar prueba unitaria para el archivo #file:userService.ts
```

🤖 Copilot Answer:

```typescript
import { AppDataSource } from '../data-source';
import { User } from '../entities/User';
import { UserType } from '../enums/userType';
import { UserService } from './userService';

jest.mock('../src/data-source', () => ({
	AppDataSource: {
		getRepository: jest.fn().mockReturnValue({
			findOne: jest.fn(),
			create: jest.fn(),
			save: jest.fn(),
			find: jest.fn(),
		}),
	},
}));

describe('UserService', () => {
	let userService: UserService;
	let userRepositoryMock: jest.Mocked<
		ReturnType<typeof AppDataSource.getRepository>
	>;

	beforeEach(() => {
		userService = new UserService();
		userRepositoryMock = AppDataSource.getRepository(
			User,
		) as unknown as jest.Mocked<ReturnType<typeof AppDataSource.getRepository>>;
		jest.clearAllMocks();
	});

	describe('createUser', () => {
		it('should create a new user successfully', async () => {
			userRepositoryMock.findOne.mockResolvedValue(null);
			userRepositoryMock.create.mockReturnValue({
				name: 'John Doe',
				email: 'john@example.com',
				usertype: UserType.USER,
			});
			userRepositoryMock.save.mockResolvedValue({
				id: 1,
				name: 'John Doe',
				email: 'john@example.com',
				usertype: UserType.USER,
			});

			const result = await userService.createUser(
				'John Doe',
				'john@example.com',
			);

			expect(userRepositoryMock.findOne).toHaveBeenCalledWith({
				where: { email: 'john@example.com' },
			});
			expect(userRepositoryMock.create).toHaveBeenCalledWith({
				name: 'John Doe',
				email: 'john@example.com',
				usertype: UserType.USER,
			});
			expect(userRepositoryMock.save).toHaveBeenCalled();
			expect(result).toEqual({
				id: 1,
				name: 'John Doe',
				email: 'john@example.com',
				usertype: UserType.USER,
			});
		});

		it('should throw an error if user already exists', async () => {
			userRepositoryMock.findOne.mockResolvedValue({
				id: 1,
				email: 'john@example.com',
			});

			await expect(
				userService.createUser('John Doe', 'john@example.com'),
			).rejects.toThrow('User already exists');
		});
	});

	describe('createAdmin', () => {
		it('should create a new admin successfully', async () => {
			userRepositoryMock.findOne.mockResolvedValue(null);
			userRepositoryMock.create.mockReturnValue({
				name: 'Admin',
				email: 'admin@example.com',
				usertype: UserType.ADMIN,
			});
			userRepositoryMock.save.mockResolvedValue({
				id: 2,
				name: 'Admin',
				email: 'admin@example.com',
				usertype: UserType.ADMIN,
			});

			const result = await userService.createAdmin(
				'Admin',
				'admin@example.com',
			);

			expect(userRepositoryMock.findOne).toHaveBeenCalledWith({
				where: { email: 'admin@example.com' },
			});
			expect(userRepositoryMock.create).toHaveBeenCalledWith({
				name: 'Admin',
				email: 'admin@example.com',
				usertype: UserType.ADMIN,
			});
			expect(userRepositoryMock.save).toHaveBeenCalled();
			expect(result).toEqual({
				id: 2,
				name: 'Admin',
				email: 'admin@example.com',
				usertype: UserType.ADMIN,
			});
		});

		it('should throw an error if admin already exists', async () => {
			userRepositoryMock.findOne.mockResolvedValue({
				id: 2,
				email: 'admin@example.com',
			});

			await expect(
				userService.createAdmin('Admin', 'admin@example.com'),
			).rejects.toThrow('User exists');
		});
	});

	describe('createProjectManager', () => {
		it('should create a new project manager successfully', async () => {
			userRepositoryMock.findOne.mockResolvedValue(null);
			userRepositoryMock.create.mockReturnValue({
				name: 'PM',
				email: 'pm@example.com',
				usertype: UserType.PROJECT_MANAGER,
			});
			userRepositoryMock.save.mockResolvedValue({
				id: 3,
				name: 'PM',
				email: 'pm@example.com',
				usertype: UserType.PROJECT_MANAGER,
			});

			const result = await userService.createProjectManager(
				'PM',
				'pm@example.com',
			);

			expect(userRepositoryMock.findOne).toHaveBeenCalledWith({
				where: { email: 'pm@example.com' },
			});
			expect(userRepositoryMock.create).toHaveBeenCalledWith({
				name: 'PM',
				email: 'pm@example.com',
				usertype: UserType.PROJECT_MANAGER,
			});
			expect(userRepositoryMock.save).toHaveBeenCalled();
			expect(result).toEqual({
				id: 3,
				name: 'PM',
				email: 'pm@example.com',
				usertype: UserType.PROJECT_MANAGER,
			});
		});

		it('should throw an error if project manager already exists', async () => {
			userRepositoryMock.findOne.mockResolvedValue({
				id: 3,
				email: 'pm@example.com',
			});

			await expect(
				userService.createProjectManager('PM', 'pm@example.com'),
			).rejects.toThrow('User exists');
		});
	});

	describe('getUsers', () => {
		it('should retrieve all users', async () => {
			const users = [{ id: 1, name: 'John Doe', tasks: [] }];
			userRepositoryMock.find.mockResolvedValue(users);

			const result = await userService.getUsers();

			expect(userRepositoryMock.find).toHaveBeenCalledWith({
				relations: ['tasks'],
			});
			expect(result).toEqual(users);
		});
	});

	describe('getUserById', () => {
		it('should retrieve a user by ID', async () => {
			const user = { id: 1, name: 'John Doe', tasks: [] };
			userRepositoryMock.findOne.mockResolvedValue(user);

			const result = await userService.getUserById(1);

			expect(userRepositoryMock.findOne).toHaveBeenCalledWith({
				where: { id: 1 },
				relations: ['tasks'],
			});
			expect(result).toEqual(user);
		});

		it('should return null if user does not exist', async () => {
			userRepositoryMock.findOne.mockResolvedValue(null);

			const result = await userService.getUserById(999);

			expect(userRepositoryMock.findOne).toHaveBeenCalledWith({
				where: { id: 999 },
				relations: ['tasks'],
			});
			expect(result).toBeNull();
		});
	});
});

```

Finalmente, vamos a generar pruebas unitarias para el archivo `taskService.ts`.

👤 Prompt: 

```plaintext
@workspace /tests Generar prueba unitaria para el archivo #file:taskService.ts
```

🤖 Copilot Answer:

```typescript
// filepath: c:\Users\Clever - Saul\Desktop\HandsOn\CODING\new\coding-and-vulnerabilities\test_README.md

import { AppDataSource } from '../data-source';
import { Task } from '../entities/Task';
import { User } from '../entities/User';
import { TaskStatus } from '../enums/taskStatus';
import { TaskService } from './taskService';

jest.mock('./refactoring/src/data-source', () => ({
	AppDataSource: {
		getRepository: jest.fn().mockImplementation((entity) => {
			if (entity === Task) {
				return {
					findOne: jest.fn(),
					save: jest.fn(),
					find: jest.fn(),
				};
			} else if (entity === User) {
				return {
					findOne: jest.fn(),
					find: jest.fn(),
				};
			}
		}),
	},
}));

describe('TaskService', () => {
	let taskService: TaskService;
	let taskRepositoryMock: {
		findOne: jest.Mock;
		save: jest.Mock;
		find: jest.Mock;
	};

	beforeEach(() => {
		taskService = new TaskService();
		taskRepositoryMock = AppDataSource.getRepository(Task) as unknown as {
			findOne: jest.Mock;
			save: jest.Mock;
			find: jest.Mock;
		};
		jest.clearAllMocks();
	});

	describe('updateTaskStatus', () => {
		it('should update task status to DONE and set completedAt', async () => {
			const mockTask = { id: 1, status: TaskStatus.OPEN, completedAt: null };
			taskRepositoryMock.findOne.mockResolvedValue(mockTask);
			taskRepositoryMock.save.mockResolvedValue({
				...mockTask,
				status: TaskStatus.DONE,
				completedAt: new Date(),
			});

			await taskService.updateTaskStatus(1, TaskStatus.DONE);

			expect(taskRepositoryMock.findOne).toHaveBeenCalledWith({
				where: { id: 1 },
			});
			expect(taskRepositoryMock.save).toHaveBeenCalled();
			expect(mockTask.completedAt).toBeInstanceOf(Date);
		});

		it('should throw an error if task not found', async () => {
			taskRepositoryMock.findOne.mockResolvedValue(null);

			await expect(
				taskService.updateTaskStatus(999, TaskStatus.DONE),
			).rejects.toThrow('Task not found');
		});

		it('should throw an error if status is invalid', async () => {
			const mockTask = { id: 1, status: TaskStatus.OPEN };
			taskRepositoryMock.findOne.mockResolvedValue(mockTask);

			await expect(
				taskService.updateTaskStatus(1, 'INVALID_STATUS'),
			).rejects.toThrow('Invalid status');
		});
	});

	describe('getTasks', () => {
		it('should retrieve all tasks', async () => {
			const tasks = [{ id: 1, title: 'Task 1', user: {} }];
			taskRepositoryMock.find.mockResolvedValue(tasks);

			const result = await taskService.getTasks();

			expect(taskRepositoryMock.find).toHaveBeenCalledWith({
				relations: ['user'],
			});
			expect(result).toEqual(tasks);
		});
	});

	describe('getTaskById', () => {
		it('should retrieve a task by ID', async () => {
			const task = { id: 1, title: 'Task 1' };
			taskRepositoryMock.findOne.mockResolvedValue(task);

			const result = await taskService.getTaskById(1);

			expect(taskRepositoryMock.findOne).toHaveBeenCalledWith({
				where: { id: 1 },
			});
			expect(result).toEqual(task);
		});

		it('should throw an error if task not found', async () => {
			taskRepositoryMock.findOne.mockResolvedValue(null);

			await expect(taskService.getTaskById(999)).rejects.toThrow(
				'Task not found',
			);
		});
	});

	describe('getTasksByUserId', () => {
		it('should retrieve tasks by user ID', async () => {
			const tasks = [{ id: 1, title: 'Task 1', user: { id: 1 } }];
			taskRepositoryMock.find.mockResolvedValue(tasks);

			const result = await taskService.getTasksByUserId(1);

			expect(taskRepositoryMock.find).toHaveBeenCalledWith({
				where: { user: { id: 1 } },
			});
			expect(result).toEqual(tasks);
		});
	});
});

```

Copilot genera los casos de prueba para las funciones en los archivos `userService.ts` y `taskService.ts`, asegurando que nuestro código esté completamente probado y sea confiable. Al automatizar el proceso de generación de pruebas, Copilot ayuda a mantener la calidad y la corrección del código, facilitando la detección de errores y problemas desde las primeras etapas del ciclo de desarrollo.

---

## ⚠️ **Detección y Mitigación de Vulnerabilidades de Seguridad con GitHub Copilot** 🔍

Ahora, exploremos cómo GitHub Copilot puede ayudar a identificar posibles vulnerabilidades de seguridad en tu código. Copilot no solo ayuda a detectar estas amenazas, sino que también proporciona explicaciones de las vulnerabilidades y sugiere formas de solucionarlas.

En este paso, pediremos a Copilot que nos ayude a analizar la seguridad de algunos archivos e identificar posibles vulnerabilidades, especialmente aquellas relacionadas con:

1. **Inyección SQL**: Ejecución de código SQL malicioso a través de entradas de usuario.
2. **Cross-Site Scripting (XSS)**: Inyección de scripts maliciosos en páginas web vistas por otros.
3. **Cross-Site Request Forgery (CSRF)**: Acciones no autorizadas realizadas en nombre de usuarios autenticados.
4. **Autenticación Rota**: Mecanismos de autenticación comprometidos.
5. **Exposición de Datos Sensibles**: Protección inadecuada de información sensible.

#### Paso 1: Solicitar a GitHub Copilot que ayude a revisar la seguridad de tus archivos.

👤Solicitud:

```
Necesito tu ayuda para revisar la seguridad de algunos archivos. Por favor, ayuda a identificar posibles vulnerabilidades, especialmente aquellas relacionadas con:

Inyección SQL
Cross-Site Scripting (XSS)
Cross-Site Request Forgery (CSRF)
Autenticación Rota
Exposición de Datos Sensibles
Si encuentras otros problemas de seguridad, por favor señálalos también. Para cada vulnerabilidad, proporciona una breve explicación de por qué es una amenaza y cómo puede ser explotada. Además, sugiere buenas prácticas o mejoras en el código para mitigar estas vulnerabilidades de manera efectiva. Por favor, avísame si entiendes mi requerimiento y luego te especificaré el archivo a analizar.
```

👤 Solicitud:

```
Comencemos con el archivo #file:example1.ts
```

🤖 Respuesta de Copilot Chat

```
Revisemos el código proporcionado en busca de posibles vulnerabilidades:

1. Inyección SQL
Amenaza: La inyección SQL ocurre cuando un atacante puede manipular una consulta SQL inyectando entradas maliciosas. Esto puede llevar a un acceso o modificación no autorizada de datos.

Explotación: Un atacante puede ingresar una cadena como example@example.com' OR '1'='1, lo que haría que la consulta devuelva todos los usuarios.

Mitigación: Utiliza consultas parametrizadas o métodos de ORM para prevenir la inyección SQL.

2. Exposición de Datos Sensibles
Amenaza: Incluir información sensible como credenciales de base de datos en el código fuente puede llevar a la exposición de datos si el código se filtra.

Explotación: Si alguien obtiene acceso al código fuente, puede usar las credenciales para acceder a la base de datos.

Mitigación: Usa variables de entorno para almacenar información sensible.

3. Autenticación Rota
Amenaza: El código no maneja autenticación ni autorización, lo que podría permitir el acceso no autorizado a los datos de los usuarios.

Explotación: Cualquiera que pueda llamar a esta función puede acceder a los datos de los usuarios sin ninguna verificación.

Mitigación: Implementa verificaciones adecuadas de autenticación y autorización.

Mejoras Sugeridas al Código
Plan Paso a Paso
Usa variables de entorno para datos sensibles.
Utiliza consultas parametrizadas para prevenir la inyección SQL.
Agrega verificaciones de autenticación y autorización.

...
```
Ahora, analiza el archivo #file example2.ts (repite el mismo proceso con los siguientes archivos hasta el example5.ts).

**Como puedes ver, la seguridad es un aspecto crítico del desarrollo, y GitHub Copilot ofrece un soporte valioso al identificar vulnerabilidades como la inyección SQL, XSS y más.**

Al detectar estos problemas de manera temprana y proporcionar sugerencias para solucionarlos, Copilot ayuda a garantizar que tu código sea más resistente frente a amenazas de seguridad comunes, protegiendo tanto tu aplicación como a sus usuarios.

#### Paso 2: Marco de Modelado de Amenazas STRIDE

En este paso, vamos a pedirle a GitHub Copilot que nos explique el marco de modelado de amenazas STRIDE y cómo se aplica para identificar amenazas de seguridad. STRIDE es un marco bien conocido que se utiliza para categorizar riesgos de seguridad potenciales, y al interactuar con Copilot, veremos cómo puede ayudarnos a comprender y aplicar estos conceptos a nuestro código.

**STRIDE**

Un marco de modelado de amenazas utilizado para identificar y categorizar posibles amenazas de seguridad en sistemas de software. Fue desarrollado por Microsoft y es ampliamente utilizado en el campo de la ciberseguridad para ayudar a los desarrolladores y profesionales de seguridad a analizar sistemáticamente los riesgos de seguridad asociados con un sistema. El acrónimo STRIDE significa:

1. **Suplantación (Spoofing)**: La amenaza de que un atacante se haga pasar por otro usuario o sistema para obtener acceso no autorizado.
2. **Manipulación (Tampering)**: La amenaza de modificación o corrupción no autorizada de datos, código o configuraciones.
3. **Repudio (Repudiation)**: La amenaza de que un usuario o atacante pueda negar haber realizado una acción sin que otras partes puedan probar lo contrario, a menudo debido a la falta de registros o auditorías adecuadas.
4. **Divulgación de Información (Information Disclosure)**: La amenaza de exponer información sensible a partes no autorizadas, lo que puede llevar a violaciones de privacidad o filtraciones de datos.
5. **Denegación de Servicio (DoS)**: La amenaza de un ataque que interrumpe el funcionamiento normal de un sistema, haciéndolo inaccesible para sus usuarios previstos.
6. **Elevación de Privilegios (Elevation of Privilege)**: La amenaza de que un atacante pueda obtener derechos o privilegios elevados dentro de un sistema, lo que potencialmente les permite realizar acciones no autorizadas.

#### Preguntar a Copilot sobre STRIDE y cómo se aplica para identificar amenazas de seguridad

👤 Solicitud:

```
¿Tienes conocimiento del marco de modelado de amenazas STRIDE? Si es así, por favor proporciona una breve explicación de STRIDE y cómo se aplica para identificar amenazas de seguridad en software. En el siguiente mensaje, especificaré qué archivo analizarás basado en STRIDE para ayudar a identificar posibles amenazas de seguridad.
```

🤖 Respuesta de Copilot Chat:

```
Sí, tengo conocimiento del marco de modelado de amenazas STRIDE. Aquí tienes una breve explicación:

Marco STRIDE
STRIDE es un marco de modelado de amenazas desarrollado por Microsoft para ayudar a identificar amenazas de seguridad en sistemas de software. Significa:

Suplantación (Spoofing): Hacerse pasar por algo o alguien más.

Amenaza: Acceso no autorizado al hacerse pasar por un usuario legítimo.
Mitigación: Mecanismos de autenticación robustos.
Manipulación (Tampering): Modificación de datos o código.

Amenaza: Cambios no autorizados en datos o código.
Mitigación: Verificaciones de integridad, firmas digitales.
Repudio (Repudiation): Negar una acción sin forma de probar lo contrario.

Amenaza: Los usuarios niegan haber realizado una acción.
Mitigación: Registro y auditoría.
Divulgación de Información (Information Disclosure): Exposición de información a usuarios no autorizados.

Amenaza: Acceso no autorizado a datos sensibles.
Mitigación: Cifrado, controles de acceso.
Denegación de Servicio (DoS): Hacer que un sistema no esté disponible.

Amenaza: Sobrecargar el sistema para hacerlo inaccesible.
Mitigación: Limitación de tasas, gestión de recursos.
Elevación de Privilegios (Elevation of Privilege): Obtener privilegios más altos de los permitidos.

Amenaza: Acceso no autorizado a funciones de nivel superior.
Mitigación: Controles de acceso adecuados, principio de privilegio mínimo.
Aplicando STRIDE para Identificar Amenazas de Seguridad
Al analizar un archivo o sistema, puedes usar el marco STRIDE para identificar sistemáticamente posibles amenazas de seguridad:

Suplantación: Verifica los mecanismos de autenticación y asegúrate de que sean robustos.
Manipulación: Busca verificaciones de integridad de datos y protecciones contra modificaciones no autorizadas.
Repudio: Asegúrate de que las acciones se registren y puedan ser auditadas.
Divulgación de Información: Verifica que los datos sensibles estén protegidos y no expuestos.
Denegación de Servicio: Identifica posibles puntos de sobrecarga y asegúrate de que existan protecciones.
Elevación de Privilegios: Verifica los controles de acceso y asegúrate de que los usuarios no puedan obtener privilegios no autorizados.
Por favor, especifica el archivo que te gustaría que analice utilizando el marco STRIDE.
```

👤Solicitud:

```
el archivo a analizar utilizando el marco STRIDE es: #file:example6.ts
```

Ahora que hemos revisado el marco STRIDE y cómo ayuda a identificar amenazas de seguridad, le pedimos a GitHub Copilot que analice un archivo utilizando este método. Esto demuestra cómo Copilot puede ayudarnos a encontrar problemas como Suplantación, Manipulación o Denegación de Servicio en nuestro código. Al usar Copilot, podemos asegurarnos de que los riesgos de seguridad potenciales se detecten y manejen de manera más fácil y rápida.

---

### **Conclusión**
Al concluir la sesión de hoy, espero que hayas obtenido valiosos conocimientos sobre cómo GitHub Copilot puede transformar tu flujo de trabajo de codificación.

Hemos explorado diversas formas de interactuar con Copilot, desde el Desarrollo Basado en Comentarios hasta el chat en línea de Copilot, así como el uso de participantes, comandos y variables para mejorar su funcionalidad. Has visto cómo Copilot puede ayudar a generar desde fragmentos básicos de código hasta algoritmos complejos, cómo puede ayudar a refactorizar tu código y cómo simplifica la creación de pruebas unitarias.

Recuerda, Copilot no es solo una herramienta para acelerar el desarrollo: es un asistente poderoso que puede mejorar la calidad del código, la eficiencia y tu experiencia general como desarrollador.

Gracias a todos por participar. ¡Les animo a seguir experimentando con Copilot en sus propios proyectos, y estoy seguro de que descubrirán aún más formas en las que puede asistirles en sus tareas diarias de codificación!



