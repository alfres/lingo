var pal = ["CERDO", "LARGO", "TERCO", "PERRO", "TANGO", "MANGO", "TONGO", "TOSCO", "LERDO", "NARDO",
           "CESTO", "DARDO", "CARDO", "BERRO", "TERSO", "TORSO", "CALDO", "TONTO", "HONGO", "MUSGO",
		   "LIRIO", "LENTO", "NALGA", "NIMIO", "NECIO", "NIEVE", "NARIZ", "ROSCA", "MOSCA", "COSTA",
           "DENSO", "BELLO", "VELLO", "VIEJO", "BOLSA", "BANCO", "TORDO", "TARDE", "TARTA", "TORTA",
		   "ANSIA", "ANTRO", "ANUAL", "ANIMO", "ANEXO", "ANGEL", "APICE", "APODO", "APNEA", "AORTA",
           "APEGO", "AMAGO", "ANCLA", "AMBAR", "APOYO", "ASCUA", "ATAUD", "ATAJO", "ARBOL", "ARENA",
		   "ARABE", "ARADO", "ARAÑA", "AROMA", "ARROZ", "ARPON", "ADOBE", "ACTOR", "ABEJA", "ABETO",
           "ALERO", "AGORA", "AZOTE", "AGAPE", "AGRIO", "BACHE", "BAILE", "BALSA", "BANDA", "BANDO",
		   "BARBA", "BARCA", "BARCO", "BARRA", "BARRO", "BERZA", "BLUSA", "BOINA", "BRASA", "BRIDA",
           "BRISA", "BROCA", "BROMA", "BRUJA", "BRUMA", "CABLE", "CABRA", "CEBRA", "COBRA", "CRIBA",
		   "EBANO", "FIBRA", "FOBIA", "GAMBA", "HABIL", "HEBRA", "JIBIA", "LABIO", "LIBRA", "MAMBO",
           "RABIA", "RUMBA", "SABIO", "SABLE", "SABOR", "SAMBA", "TABLA", "TIBIA", "TIMBA", "TUMBA",
		   "TURBA", "CEBRA", "OBLEA", "OBESO", "CARNE", "BRAZO", "BRIDA", "BURLA", "PULPO", "PARTO",
           "PULSO", "MANSO", "CIRCO", "COLZA", "MECHA", "DUCHA", "COFRE", "CAFRE", "CELDA", "BILIS",
		   "CHAPA", "CHEPA", "BACHE", "TECHO", "PLAYA", "MORRO", "FORRO", "CANOA", "CHINO", "MANTA",
           "RISCO", "GORDO", "CHULO", "MUELA", "ACIDO", "DULCE", "DROGA", "DRAGA", "TORNO", "TRONO",
		   "DOSIS", "GRAPA", "GRASA", "BURLA", "SUEÑO", "BURRO", "SIDRA", "LEPRA", "LANZA", "BIZCO",
		   "MIEDO", "MIXTO", "MILLA", "MIRLO", "MISIL", "MOLDE", "HAMPA", "MONTE", "MUSLO", "LITIO",
		   "BIELA", "POLLO", "PIANO", "PIEZA", "CIELO", "PATIN", "PERLA", "HIELO", "CHOZA", "NOCHE",
		   "PILLO", "MENTE", "CARGA", "SENDA", "SELVA", "TAREA", "SUSTO", "PORRA", "PARRA", "PIOJO",
		   "ALIJO", "SUERO", "VENDA", "BREZO", "LIANA", "HACHA", "HORNO", "DUELO", "MENTA", "BOLLO",
		   "GRAMO", "TRIGO", "AVENA", "MUECA", "DISCO", "FUEGO", "FAENA", "MUNDO", "CHIVO", "CHICO",
		   "GRUMO", "GRUPO", "GESTO", "GASTO", "GENTE", "GRIFO", "GRANO", "GALGO", "DIANA", "DIETA",
		   "DALIA", "DANZA", "FORMA", "FORJA", "FIERA", "FECHA", "FICHA", "FRENO", "FURIA", "FALDA",
		   "GARZA", "GRUPO", "PATIO", "PLAZA", "PRIMO", "BRAGA", "BAHIA", "BUCLE", "BUFON", "BUJIA",
		   "CACAO", "CAJON", "CALOR", "CALLE", "CALLO", "CALMA", "CLAVE", "CAMPO", "CANOA", "CARGA",
		   "CARPA", "CASCO", "CASPA", "CAUCE", "CELTA", "CENSO", "CHOZA", "CIEGO", "CISNE", "COBRE",
		   "COJIN", "COLOR", "COPIA", "CORAL", "CREMA", "CUERO", "CURSO", "DATIL", "DEBIL", "DESEO",
		   "DIGNO", "DOGMA", "DOLOR", "DOSIS", "DOCIL", "DUEÑO", "EBRIO", "ELITE", "ENANO", "EPOCA",
		   "ETAPA", "FAROL", "FANGO", "FERIA", "FEROZ", "FAUNA", "FIDEO", "FINCA", "FINAL", "FLACO",
		   "FLUOR", "FLEMA", "FONDO", "FRASE", "FRESA", "FRUTA", "FUSIL", "GAITA", "GALLO", "GANSO",
		   "GOLFO", "GOLPE", "GRUPA", "HUECO", "HUESO", "HUEVO", "IDOLO", "JABON", "JUEGO", "JUDIO",
		   "LARVA", "LATEX", "LECHE", "LEJIA", "LENTE", "LETRA", "LIBRO", "LITRO", "LISTO", "LIMON",
		   "LUCHA", "LUCRO", "MADRE", "MAGIA", "MAREA", "MANIA", "MELON", "METAL", "MITAD", "MONTE",
		   "MOTIN", "MONJA", "MUJER", "MUSEO", "NADIE", "NAIPE", "NIETO", "NICHO", "NOBLE", "NOVIO",
		   "OASIS", "OLIVO", "OPERA", "OTOÑO", "OVEJA", "OXIDO", "PACTO", "PANZA", "PALMA", "PAUSA",
		   "PECHO", "PELEA", "PEZON", "PERNO", "PINZA", "PLACA", "PLOMO", "PLUMA", "PALMA", "POBRE",
		   "POETA", "POLEA", "POLEN", "POSTE", "POLVO", "POTRO", "PRADO", "PRISA", "PUNTO", "QUESO",
		   "RADIO", "RATON", "RAMPA", "RAZON", "REGLA", "RELOJ", "RIEGO", "RIGOR", "RIÑON", "RIMEL",
		   "RIFLE", "ROBLE", "ROMBO", "RUEDA", "RUIDO", "SALUD", "SALDO", "SANTO", "SAUNA", "SAUCE",
		   "SAVIA", "SATEN", "SECTA", "SEÑAL", "SEÑOR", "SERIO", "SILLA", "SIFON", "SOBRE", "SOCIO",
		   "SONDA", "SUDOR", "SUCIO", "SURCO", "TACTO", "TAPIZ", "TAPIA", "TAPON", "TARRO", "TAREA",
		   "TALON", "TAZON", "TEMOR", "TENOR", "TENIS", "TEXTO", "TINTA", "TRAPO", "TRUFA", "TRUCO"]