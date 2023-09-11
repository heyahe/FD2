const router = {
	main: MainPageComponent,
	balance: BalancePageComponent,
	analytics: AnalyticsPageComponent,
	default: MainPageComponent,
	error: ErrorPageComponent
};

const mySPA = (function() {
		
/* VIEW START --------------------------------*/

function ModuleView() {
	let myModuleContainer = null;
	let menu = null;
	let footerMenu = null;
	let contentContainer = null;

	this.init = function(container) {
			myModuleContainer = container;
			menu = document.querySelector('#menuNav');
			footerMenu = document.querySelector('#footerNav');
			contentContainer = document.querySelector('#content');
	}

	this.updateButtons = function(currentPage) {
			const menuLinks = menu.querySelectorAll('.menu__link');
			const state = `#${currentPage}`;

			for (let link of menuLinks) {
					state === link.getAttribute('href') ?
									link.classList.add('active') :
									link.classList.remove('active');
			}
	}

	this.renderContent = function(hashPageName) {
			let routeName = 'default';

			if (hashPageName.length > 0) {
					routeName = hashPageName in router ? hashPageName : 'error';
			}

			window.document.title = router[routeName].title;
			contentContainer.innerHTML = router[routeName].render(`${routeName}-page`);
			this.updateButtons(router[routeName].id);
	}

	this.drawLineGraph = function() {
		const ctx = document.getElementById('balanceGraph').getContext('2d');

		const data = {
			labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'],
			datasets: [{
				label: 'Баланс',
				data: [100, 200, 150, 300, 250, 400],
				backgroundColor: 'rgba(0, 255, 163, .2)',
				borderColor: '#00FFA3',
				borderWidth: 3,
				pointRadius: 0
			}]
		};
		
		const options = {
			scales: {
				y: {
					beginAtZero: true,
				}
			}
		};
		
		const lineChart = new Chart(ctx, {
			type: 'line',
			data: data,
			options: options
		});
	}

	this.drawExpensesChart = function() {
		let ctx = document.getElementById('expenses').getContext('2d');

		const data = {
			labels: [
				'Еда',
				'Транспорт',
				'Развлечения',
				'Здоровье'
			],
			datasets: [{
				label: 'Расходы',
				data: [300, 50, 100, 15],
				backgroundColor: [
					'#1AFFAC',
					'#00E693',
					'#00B372',
					'#004029'
				],
				hoverOffset: 4
			}]
		};

		let expChart = new Chart(ctx, {
			type: 'doughnut',
			data: data,
		});
	}

	this.drawIncomeChart = function() {
		let ctx = document.getElementById('income').getContext('2d');

		const data = {
			labels: [
				'Зарплата',
				'Стипендия',
				'Родители отправили',
				'Другой источник'
			],
			datasets: [{
				label: 'Доходы',
				data: [300, 50, 100, 30],
				backgroundColor: [
					'#1A83FF',
					'#0069E6',
					'#0052B3',
					'#001B3B'
				],
				hoverOffset: 4
			}]
		};

		let expChart = new Chart(ctx, {
			type: 'doughnut',
			data: data,
		});
	}

	document.querySelector('.signin__btn').addEventListener('click', function() {
		document.querySelector('#modalLogIn').classList.remove('hide');
		const email = document.getElementById('emailInp').value;
		const password = document.getElementById('passwordInp').value;
		ModuleController.register(email, password);
	})

	document.querySelector('.login__btn').addEventListener('click', function() {
		const email = document.getElementById('emailInp').value;
		const password = document.getElementById('passwordInp').value;
		ModuleController.login(email, password);
	});

	document.querySelector('.logout__btn').addEventListener('click', function() {
		ModuleController.logout();
	})

	// document.querySelector('#modalClose').addEventListener('click', function() {
	// 	document.querySelector('#modalLogIn').classList.add('hide');
	// 	document.querySelector('.modal__overlay').classList.add('hide');
	// });
};

/* VIEW END --------------------------------*/

/* MODEL START -------------------------------- */

function ModuleModel () {
		let myModuleView = null;

		this.init = function(view) {
			myModuleView = view;
		}

		this.updateState = function(hashPageName) {
			myModuleView.renderContent(hashPageName);
		}

		this.drawAnalyticsExpChart = function() {
			myModuleView.drawExpensesChart();
		}

		this.drawAnalyticsIncChart = function() {
			myModuleView.drawIncomeChart();
		}

		this.drawLineGraph = function() {
			myModuleView.drawLineGraph();
		}

		this.closeModal = function() {
			myModuleView.closeModal();
		}
}

/* MODEL END -------------------------------- */

/* CONTROLLER START -------------------------------- */

function ModuleController () {
	let myModuleContainer = null;
	let myModuleModel = null;

	this.init = function(container, model) {
			myModuleContainer = container;
			myModuleModel = model;

			// вешаем слушателя на событие hashchange
			window.addEventListener("hashchange", this.updateState);

			this.updateState(); //первая отрисовка
	} 

	this.updateState = function() {
		const hashPageName = location.hash.slice(1).toLowerCase();
		myModuleModel.updateState(hashPageName);
		if (hashPageName === 'analytics') {
			myModuleModel.drawAnalyticsExpChart();
			myModuleModel.drawAnalyticsIncChart();
		}
		if (hashPageName === 'balance') {
			myModuleModel.drawLineGraph();
		}
	}

	this.register = function(email, password) {
		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(function(userCredential) {
			console.log('Регистрация успешна')
		})
		.catch(function(error) {
			console.log('Ошибка регистрации', error);
		});
	};

	this.login = function(email, password) {
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(function(userCredential) {
			console.log('Вход успешен');
		})
		.catch(function(error) {
			console.log('Ошибка входа', error);
		});
	};

	this.logout = function() {
		firebase.auth().signOut()
		.then(function() {
			console.log('Выход успешен');
		})
		.catch(function(error) {
			console.log('Ошибка выхода', error);
		});
	};

	// this.closeModal = function() {
	// 	this.myModuleModel.closeModal();
	// }
};

/* CONTROLLER END -------------------------------- */

	// document.querySelector('.signin__btn').addEventListener('click', function() {
// 		document.querySelector('#modalLogIn').classList.remove('hide');
// 		document.querySelector('.modal__overlay').classList.remove('hide');
// 		const email = document.getElementById('emailInp').value;
// 		const password = document.getElementById('passwordInp').value;
// 		controller.register(email, password); // Используем метод register из ModuleController
// });

	// document.querySelector('#modalClose').addEventListener('click', function() {
	// 	document.querySelector('#modalLogIn').classList.add('hide');
	// 	document.querySelector('.modal__overlay').classList.add('hide');
	// })

return {
		init: function(container) {
				this.main(container);

				const view = new ModuleView();
				const model = new ModuleModel();
				const controller = new ModuleController();

				view.init(document.getElementById(container));
				model.init(view);
				controller.init(document.getElementById(container), model);
		},

		main: function(container) {
				console.log(`блабла`);
		},
};

}());

document.addEventListener('DOMContentLoaded', mySPA.init('wrapper'));
