INSERT INTO User (email, password, role, firstname, lastname, phone, isActive, deletedAt, createdAt)
VALUES
-- 👦 Boys
('issa.manager@example.com', 'hash_issa', 'MANAGER', 'Issa', 'Farhadi', '+989121111101', true, NULL, NOW()),
('amir.agent@example.com', 'hash_amir', 'AGENT', 'Amir', 'Salehi', '+989121111102', true, NULL, NOW()),
('navid.deleted@example.com', 'hash_navid', 'CLIENT', 'Navid', 'Khosravi', '+989121111103', true, '2024-12-12 15:00:00', NOW()),

-- 💃 Persian Girls
('ayda.sharifi@example.com', 'hash_ayda', 'CLIENT', 'Ayda', 'Sharifi', '+989121111104', true, NULL, NOW()),
('tara.karimi@example.com', 'hash_tara', 'CLIENT', 'Tara', 'Karimi', '+989121111105', true, NULL, NOW()),
('niloofar.jafari@example.com', 'hash_niloofar', 'CLIENT', 'Niloofar', 'Jafari', '+989121111106', true, NULL, NOW()),
('darya.mohammadi@example.com', 'hash_darya', 'CLIENT', 'Darya', 'Mohammadi', '+989121111107', true, NULL, NOW()),
('sahar.eskandari@example.com', 'hash_sahar', 'CLIENT', 'Sahar', 'Eskandari', '+989121111108', true, NULL, NOW()),
('leila.hosseini@example.com', 'hash_leila', 'CLIENT', 'Leila', 'Hosseini', '+989121111109', true, NULL, NOW()),
('fatemeh.azimi@example.com', 'hash_fatemeh', 'CLIENT', 'Fatemeh', 'Azimi', '+989121111110', true, NULL, NOW());


INSERT INTO ClientProfile (userId, isVerifiedOwner, familyStatus, isHandicapped, isPriority, isEmployed, employmentType, personalIncome, householdIncome)
VALUES
(4, false, 'CELIBATAIRE', false, true, true, 'CDI', 30000, 60000),
(5, true, 'MARIE', false, false, true, 'AUTO_ENTREPRENEUR', 50000, 90000),
(6, false, 'AVEC_ENFANT', false, true, true, 'CDD', 32000, 62000),
(7, false, 'AUTRE', true, false, false, NULL, NULL, NULL),
(8, false, 'CELIBATAIRE', false, true, true, 'FREELANCE', 38000, 76000),
(9, false, 'CELIBATAIRE', false, false, false, NULL, NULL, NULL),
(10, false, 'CELIBATAIRE', false, true, true, 'INTERIM', 22000, 42000);

INSERT INTO Agency (postalCode, city, department, address)
VALUES
('75001', 'Paris', '75', '10 rue de Rivoli'),
-- ('69001', 'Lyon', '69', '15 place Bellecour'),
-- ('06000', 'Nice', '06', '20 avenue Jean Médecin'),
-- ('31000', 'Toulouse', '31', '25 rue Alsace Lorraine');

INSERT INTO AgentProfile (userId, agencyId, position, hiredAt, performanceScore)
VALUES
(2, 1, 'AGENT', NOW(), 89.5);


INSERT INTO Property (title, description, price, type, status, listingType, city, department, address, ownerId, agencyId)
VALUES
('Loft moderne avec terrasse', 'Un loft chic avec vue sur Paris.', 250000, 'loft', 'AVAILABLE', 'SALE', 'Paris', '75', '5 rue du luxe', 1, 1),
('Appartement cosy en centre-ville', 'Parfait pour jeune couple.', 180000, 'apartment', 'AVAILABLE', 'SALE', 'Lyon', '69', '18 rue Victor Hugo', 2, 1),
('Villa avec piscine privée', 'Propriété luxueuse avec jardin.', 950000, 'villa', 'AVAILABLE', 'SALE', 'Nice', '06', '73 promenade des Anglais', 3, 1),
('Studio étudiant lumineux', 'Idéalement situé proche campus.', 75000, 'studio', 'AVAILABLE', 'SALE', 'Toulouse', '31', '22 rue des facultés', 4, 1);


-- Requests without agent: property still available
INSERT INTO Request (propertyId, clientId, status, createdAt)
VALUES
(1, 2, 'PENDING', NOW()),
(2, 1, 'PENDING', NOW()),
(3, 3, 'PENDING', NOW());

-- Request WITH agent: property is already progressing toward a deal
INSERT INTO Request (propertyId, clientId, agentId, status, message, createdAt)
VALUES
(4, 4, 1, 'ACCEPTED', 'Nous avons visité et sommes convaincus.', NOW());
