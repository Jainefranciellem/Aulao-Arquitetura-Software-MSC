USE SalesManager;

INSERT INTO users (name, email) VALUES
  ('João', 'joao@example.com'),
  ('Maria', 'maria@example.com'),
  ('Pedro', 'pedro@example.com');

-- Inserir pedidos
INSERT INTO orders (user_id, total_amount) VALUES
  (1, 150.00),
  (2, 200.50),
  (3, 75.20);

-- Inserir itens de pedido
INSERT INTO order_items (order_id, product, price, quantity) VALUES
  (1, 'Camiseta', 30.00, 2),
  (1, 'Calça', 50.00, 1),
  (2, 'Sapato', 80.50, 1),
  (3, 'Boné', 15.20, 3);