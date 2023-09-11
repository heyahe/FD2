/* BALANCE PAGE COMPONENTS */
const balanceInfo = {
  render: () => {
    return `
    <div class="main__balance">
      <div class="balance__info">
          <div class="balance__info__item">
              <div class="item__pic">
                  <img src="images/balance_pic_inc.png" title="income" alt="income pic">
              </div>
              <div class="item__text">
                  <p>Доходы за месяц</p>
                  <p>$8,127<span class="small__grey__text">.90</span></p>
              </div>
              <div class="item__big__pic">
                  <img src="images/balance_bp_inc.png" title="income scale" alt="income scale big pic">
              </div>
          </div>
          <div class="balance__info__item">
              <div class="item__pic">
                  <img src="images/balance_pic_exp.png" title="expenses" alt="expenses pic">
              </div>
              <div class="item__text">
                  <p>Расходы за месяц</p>
                  <p>$1,325<span class="small__grey__text">.56</span></p>
              </div>
              <div class="item__big__pic">
                  <img src="images/balance_bp_exp.png" title="income scale" alt="income scale big pic">
              </div>
          </div>
          <div class="balance__info__item balance__item">
              <div class="item__text">
                  <p>Текущий баланс</p>
                  <p>$1,325<span class="small__grey__text">.56</span></p>
              </div>
              <div class="item__big__pic">
                  <img src="images/balance_coin.png" title="coin" alt="coin img">
              </div>
          </div>
      </div>
    `
  }
}

const LineGraphCanv = {
  render: () => {
    return `
    <div class="balance__scale">
      <div class="scale__wrapper">
          <div class="scale__text">
              <p>Месячный отчет</p>
          </div>
          <canvas class="line__graph" id="balanceGraph" height="300" width="800"></canvas>
      </div>
    `
  }
}

const addBtns = {
  render: () => {
    return `
      <div class="scale__buttons">
        <button>Добавить доход</button>
        <button>Добавить расход</button>
      </div>
    </div>
    `
  }
}

const balanceTable = {
  render: () => {
    return `
    <div class="balance__actions__list">
      <p>Последние транзакции</p>
      <table>
        <thead>
            <tr>
                <th>Категория</th>
                <th>Дата</th>
                <th>Сумма</th>
            </tr>
        </thead>
      </table>
    </div>
  </div>
    `
  }
}

/* ANALYTICS PAGE COMPONENTS */

const analyticsTitle = {
  render: () => {
    return `
    <div class="main__analytics">
      <div class="main__text">
        <h1 class="title">Привет, Username</h1>
        <p>Вот Ваша аналитика за месяц.</p>
      </div>
    `
  }
}

const analyticsInfo = {
  render: () => {
    return `
    <div class="main__info">
      <div class="main__info__item item__date">
        <div class="item__text">
            <p>Сегодня</p>
            <p>28 августа, <span class="small__gray__text">2023</span></p>
        </div>
        <div class="item__pic">
            <img src="images/calendar.png" alt="calendar" title="calendar image">
        </div>
      </div>
      <div class="main__info__item item__expenses">
        <div class="item__text">
            <p>Расходы</p>
            <p>$58,764<span class="small__gray__text">.25</span></p>
        </div>
        <div class="item__pic">
            <img src="images/Icon.png" title="expenses scale" alt="expenses scale image">
        </div>
      </div>
      <div class="main__info__item item__income">
        <div class="item__text">
            <p>Доходы</p>
            <p>$58,764<span class="small__gray__text">.25</span></p>
        </div>
        <div class="item__pic">
            <img src="images/analytics_inc.png" title="income scale" alt="income scale">
        </div>
      </div>
    </div>
    `
  }
}

const analyticsDoughnutCanvExpenses = {
  render: () => {
    return `
    <div class="main__expenses">
      <div class="main__expenses__item">
        <div class="main__expenses__text">
            <p>Расходы</p>
            <p>1-30 июля, 2023</p>
        </div>
        <canvas id="expenses" class="main__expenses__canv" width="300" height="300"></canvas> 
        <div class="expenses__legend"></div>   
      </div>
    `
  }
}

const analyticsExpHistory = {
  render: () => {
    return `
      <div class="main__expenses__item">
        <div class="main__expenses__history__text">
            <p>История расходов</p>
            <button class="show__all__btn">Все</button>
        </div>
        
      </div>
    </div>
    `
  }
}

const analyticsDoughnutCanvIncome = {
  render: () => {
    return `
      <div class="main__income">
        <div class="main__income__item">
          <div class="main__income__text">
            <p>Доходы</p>
            <p>1-30 июля, 2023</p>
          </div>
          <canvas id="income" class="main__income__canv" width="300" height="300"></canvas>  
          <div class="income__legend"></div>  
        </div>
    `
  }
}

const analyticsIncHistory = {
  render: () => {
    return `
        <div class="main__income__item">
          <div class="main__income__history__text">
            <p>История расходов</p>
            <button class="show__all__btn">Все</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    `
  }
}

/* const loginModal = {
  render: () => {
    return `
      <div class="login__modal" id="modalLogIn">
        <div class="login__modal__header">
          <p>Вход</p>
          <button class="close__btn" id="modalClose"></button>
        </div>
        <div class="login__info__container">
          <input type="text" placeholder="Введите имя пользователя" required>
          <input id="emailInp" type="text" placeholder="Введите электронную почту" required>
          <input id="passwordInp" type="text" placeholder="Введите пароль" required>
        </div>
        <div class="login__modal__warning"></div>
        <div class="login__submit__btn">
          <button class="submit__btn">Подтвердить</button>
        </div>
      </div>
    `
  }
}

const balanceModal = {
  render: () => {
    return `
    <div class="balance__modal">
      <p class="balance__modal__title">Расход</p>
    <div class="balance__modal__info">
      <p>Категория</p>
      <select class="expenses__select" placeholder="Введите категорию">
        <option>Еда</option>
        <option>Транспорт</option>
        <option>Развлечения</option>
        <option>Здоровье</option>
      </select>
      <select class="income__select" placeholder="Введите категорию">
        <option>Зарплата</option>
        <option>Стипендия</option>
        <option>Родители отправили</option>
        <option>Другой источник</option>
      </select>
      <p>Сумма</p>
      <input type="number" placeholder="Введите сумму">
    </div>
    <div class="balance__modal__btns">
      <button class="cancel__btn">Отмена</button>
      <button class="submit__btn">Подтвердить</button>
    </div>
  </div>
    `
  }
} */
