const sqlite3 = require('../node_modules/sqlite3');

const db = new sqlite3.Database('./database/kalakutsky.db');

const employees = [
  [
    'emp-001',
    'Смирнов Виктор Александрович',
    'Старший мастер',
    'Ноутбуки Apple, сложная диагностика, ремонт плат',
    '+7 (921) 444-0101',
    'smirnov.va@kalakutsky-service.local',
    'active',
    847,
  ],
  [
    'emp-002',
    'Кузнецов Алексей Николаевич',
    'Мастер',
    'Смартфоны, планшеты, дисплейные модули',
    '+7 (921) 444-0102',
    'kuznetsov.an@kalakutsky-service.local',
    'active',
    623,
  ],
  [
    'emp-003',
    'Морозов Игорь Петрович',
    'Мастер',
    'ПК, ноутбуки Windows, восстановление данных',
    '+7 (921) 444-0103',
    'morozov.ip@kalakutsky-service.local',
    'active',
    734,
  ],
  [
    'emp-004',
    'Волков Сергей Дмитриевич',
    'Мастер',
    'Принтеры, мониторы, офисная техника',
    '+7 (921) 444-0104',
    'volkov.sd@kalakutsky-service.local',
    'active',
    412,
  ],
  [
    'emp-005',
    'Петров Дмитрий Игоревич',
    'Администратор',
    'Прием заявок, общение с клиентами, согласования',
    '+7 (921) 444-0105',
    'petrov.di@kalakutsky-service.local',
    'active',
    0,
  ],
  [
    'emp-006',
    'Орлова Марина Андреевна',
    'Руководитель сервиса',
    'Контроль качества, сроки ремонта, координация запчастей',
    '+7 (921) 444-0106',
    'orlova.ma@kalakutsky-service.local',
    'active',
    158,
  ],
];

const requests = [
  {
    id: '2026-001',
    client: 'Иванов Петр Сергеевич',
    phone: '+7 (921) 555-0101',
    email: 'ivanov.ps@email.ru',
    type: 'Ноутбук',
    model: 'Apple MacBook Pro 14 2021',
    serial: 'C02XG0FDQ05N',
    problem: 'Не включается, индикатор заряда не горит',
    status: 'in_progress',
    priority: 'high',
    assigned: 'Смирнов Виктор Александрович',
    estimated: 25000,
    actual: null,
    notes: 'Требуется диагностика цепей питания и материнской платы.',
    created: '2026-05-04T09:15:00.000Z',
  },
  {
    id: '2026-002',
    client: 'Петрова Анна Ивановна',
    phone: '+7 (921) 555-0102',
    email: 'petrova.ai@gmail.com',
    type: 'Смартфон',
    model: 'Samsung Galaxy S23 Ultra',
    serial: 'RF8T50ABCDE',
    problem: 'Разбит экран после падения',
    status: 'waiting_parts',
    priority: 'medium',
    assigned: 'Кузнецов Алексей Николаевич',
    estimated: 18000,
    actual: null,
    notes: 'Заказан оригинальный дисплейный модуль.',
    created: '2026-05-05T10:40:00.000Z',
  },
  {
    id: '2026-003',
    client: 'Сидоров Дмитрий Владимирович',
    phone: '+7 (921) 555-0103',
    email: 'sidorov.dv@yandex.ru',
    type: 'Смартфон',
    model: 'iPhone 13 Pro',
    serial: 'F9GH3K4LMN2P',
    problem: 'Быстро разряжается батарея',
    status: 'completed',
    priority: 'low',
    assigned: 'Морозов Игорь Петрович',
    estimated: 6500,
    actual: 6500,
    notes: 'Аккумулятор заменен, тесты пройдены.',
    created: '2026-05-03T12:20:00.000Z',
  },
  {
    id: '2026-004',
    client: 'Козлова Елена Викторовна',
    phone: '+7 (921) 555-0104',
    email: 'kozlova.ev@mail.ru',
    type: 'Принтер',
    model: 'HP LaserJet Pro M404dn',
    serial: 'VNB8J12345',
    problem: 'Замятие бумаги, принтер не печатает',
    status: 'completed',
    priority: 'medium',
    assigned: 'Волков Сергей Дмитриевич',
    estimated: 3500,
    actual: 3500,
    notes: 'Очищены ролики подачи бумаги, выполнена калибровка.',
    created: '2026-05-03T14:10:00.000Z',
  },
  {
    id: '2026-005',
    client: 'Новиков Андрей Валерьевич',
    phone: '+7 (921) 555-0105',
    email: 'novikov.av@outlook.com',
    type: 'Ноутбук',
    model: 'ASUS ROG Strix G15',
    serial: 'L9NRAS123456',
    problem: 'Перегрев процессора и шум вентилятора',
    status: 'in_progress',
    priority: 'high',
    assigned: 'Смирнов Виктор Александрович',
    estimated: 4500,
    actual: null,
    notes: 'Проводится чистка системы охлаждения и замена термопасты.',
    created: '2026-05-05T16:30:00.000Z',
  },
  {
    id: '2026-006',
    client: 'Федорова Мария Александровна',
    phone: '+7 (921) 555-0106',
    email: 'fedorova.ma@gmail.com',
    type: 'Компьютер',
    model: 'HP EliteDesk 800 G6',
    serial: 'CZC123ABCD',
    problem: 'Не загружается Windows',
    status: 'completed',
    priority: 'high',
    assigned: 'Морозов Игорь Петрович',
    estimated: 2500,
    actual: 2500,
    notes: 'ОС восстановлена, данные пользователя сохранены.',
    created: '2026-05-02T11:50:00.000Z',
  },
  {
    id: '2026-007',
    client: 'Соколов Максим Игоревич',
    phone: '+7 (921) 555-0107',
    email: 'sokolov.mi@yandex.ru',
    type: 'Планшет',
    model: 'iPad Air 5',
    serial: 'DMXK2V3MNOP',
    problem: 'Не работает сенсорный экран',
    status: 'waiting_parts',
    priority: 'medium',
    assigned: 'Кузнецов Алексей Николаевич',
    estimated: 15000,
    actual: null,
    notes: 'Дисплейный модуль заказан, ожидается поставка.',
    created: '2026-05-04T15:35:00.000Z',
  },
  {
    id: '2026-008',
    client: 'Лебедева Ольга Сергеевна',
    phone: '+7 (921) 555-0108',
    email: 'lebedeva.os@mail.ru',
    type: 'Смартфон',
    model: 'Xiaomi 13 Pro',
    serial: 'XM13P123456',
    problem: 'Попадание влаги, телефон не включается',
    status: 'in_progress',
    priority: 'high',
    assigned: 'Волков Сергей Дмитриевич',
    estimated: 8000,
    actual: null,
    notes: 'Идет чистка после влаги и проверка разъемов.',
    created: '2026-05-06T13:15:00.000Z',
  },
  {
    id: '2026-009',
    client: 'Павлов Николай Андреевич',
    phone: '+7 (921) 555-0109',
    email: 'pavlov.na@gmail.com',
    type: 'Ноутбук',
    model: 'Lenovo ThinkPad X1 Carbon',
    serial: 'PC12AB34CD',
    problem: 'Не работают несколько клавиш',
    status: 'new',
    priority: 'medium',
    assigned: 'Смирнов Виктор Александрович',
    estimated: 12000,
    actual: null,
    notes: 'Назначена диагностика клавиатуры после попадания жидкости.',
    created: '2026-05-07T09:20:00.000Z',
  },
  {
    id: '2026-010',
    client: 'Васильева Татьяна Петровна',
    phone: '+7 (921) 555-0110',
    email: 'vasileva.tp@yandex.ru',
    type: 'Ноутбук',
    model: 'Apple MacBook Air M2',
    serial: 'C02ZK1JDMD6T',
    problem: 'Вздулся аккумулятор',
    status: 'completed',
    priority: 'high',
    assigned: 'Кузнецов Алексей Николаевич',
    estimated: 18000,
    actual: 18000,
    notes: 'Батарея заменена, корпус проверен.',
    created: '2026-05-02T16:05:00.000Z',
  },
  {
    id: '2026-011',
    client: 'Михайлов Артем Владимирович',
    phone: '+7 (921) 555-0111',
    email: 'mihailov.av@outlook.com',
    type: 'Компьютер',
    model: 'Custom Gaming PC',
    serial: 'CUSTOM-2023-456',
    problem: 'Нет изображения, POST не проходит',
    status: 'in_progress',
    priority: 'high',
    assigned: 'Морозов Игорь Петрович',
    estimated: 5000,
    actual: null,
    notes: 'Проверяется видеокарта и цепи питания.',
    created: '2026-05-06T17:25:00.000Z',
  },
  {
    id: '2026-012',
    client: 'Григорьева Светлана Ивановна',
    phone: '+7 (921) 555-0112',
    email: 'grigorieva.si@mail.ru',
    type: 'Монитор',
    model: 'Dell UltraSharp U2720Q',
    serial: 'CN-0ABCD-12345',
    problem: 'Мерцает экран',
    status: 'cancelled',
    priority: 'low',
    assigned: null,
    estimated: null,
    actual: null,
    notes: 'Клиент отказался от ремонта после диагностики.',
    created: '2026-05-01T10:00:00.000Z',
  },
  {
    id: '2026-013',
    client: 'Романов Виктор Сергеевич',
    phone: '+7 (921) 555-0113',
    email: 'romanov.vs@gmail.com',
    type: 'Смартфон',
    model: 'Google Pixel 7 Pro',
    serial: 'GP7P987654',
    problem: 'Не работает основная камера',
    status: 'new',
    priority: 'medium',
    assigned: null,
    estimated: 9000,
    actual: null,
    notes: 'Ожидает диагностики камеры.',
    created: '2026-05-07T12:45:00.000Z',
  },
  {
    id: '2026-014',
    client: 'Егорова Наталья Александровна',
    phone: '+7 (921) 555-0114',
    email: 'egorova.na@yandex.ru',
    type: 'Ноутбук',
    model: 'Dell XPS 15 9520',
    serial: 'DXPS152023AB',
    problem: 'Трещина на матрице экрана',
    status: 'waiting_parts',
    priority: 'medium',
    assigned: 'Волков Сергей Дмитриевич',
    estimated: 28000,
    actual: null,
    notes: 'Заказана матрица 4K, ожидается поставка.',
    created: '2026-05-05T09:30:00.000Z',
  },
  {
    id: '2026-015',
    client: 'Борисов Игорь Витальевич',
    phone: '+7 (921) 555-0115',
    email: 'borisov.iv@mail.ru',
    type: 'Принтер',
    model: 'Canon PIXMA G6040',
    serial: 'CNPX6040123',
    problem: 'Плохое качество печати',
    status: 'completed',
    priority: 'low',
    assigned: 'Смирнов Виктор Александрович',
    estimated: 2000,
    actual: 2000,
    notes: 'Печатающая головка прочищена, чернила заправлены.',
    created: '2026-05-01T15:10:00.000Z',
  },
];

function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function onRun(error) {
      if (error) {
        reject(error);
        return;
      }
      resolve(this);
    });
  });
}

function all(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (error, rows) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(rows);
    });
  });
}

async function main() {
  const now = new Date().toISOString();

  await run('BEGIN TRANSACTION');

  try {
    for (const employee of employees) {
      await run(
        `
          INSERT INTO employees
            (id, name, position, specialization, phone, email, status, completed_repairs, created_at, updated_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(id) DO UPDATE SET
            name = excluded.name,
            position = excluded.position,
            specialization = excluded.specialization,
            phone = excluded.phone,
            email = excluded.email,
            status = excluded.status,
            completed_repairs = excluded.completed_repairs,
            updated_at = excluded.updated_at
        `,
        [...employee, now, now],
      );
    }

    for (const request of requests) {
      const completedAt = request.status === 'completed' ? request.created : null;

      await run(
        `
          UPDATE repair_requests SET
            client_name = ?,
            client_phone = ?,
            client_email = ?,
            device_type = ?,
            device_model = ?,
            serial_number = ?,
            problem = ?,
            status = ?,
            priority = ?,
            assigned_to = ?,
            estimated_cost = ?,
            actual_cost = ?,
            notes = ?,
            created_at = ?,
            updated_at = ?,
            completed_at = ?
          WHERE id = ?
        `,
        [
          request.client,
          request.phone,
          request.email,
          request.type,
          request.model,
          request.serial,
          request.problem,
          request.status,
          request.priority,
          request.assigned,
          request.estimated,
          request.actual,
          request.notes,
          request.created,
          request.created,
          completedAt,
          request.id,
        ],
      );
    }

    await run('COMMIT');
  } catch (error) {
    await run('ROLLBACK');
    throw error;
  }

  const sampleRequests = await all(
    'SELECT id, client_name, device_type, problem, created_at FROM repair_requests ORDER BY created_at DESC LIMIT 5',
  );
  const sampleEmployees = await all(
    'SELECT id, name, position, specialization FROM employees ORDER BY name ASC LIMIT 6',
  );

  console.log(JSON.stringify({ sampleRequests, sampleEmployees }, null, 2));
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => {
    db.close();
  });
