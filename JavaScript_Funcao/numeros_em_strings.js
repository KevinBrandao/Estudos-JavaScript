/* 
Curso Web Moderno Completo com JavaScript 2022 + Projetos
Imagem do curso
112. Comparação entre string de números
Conteúdo do curso
Reproduzir
88. Cidadão de Primeira Linha
17m
Reproduzir
89. Parâmetros e Retorno São Opcionais
6m
Reproduzir
90. Parâmetros Variáveis
5m
Reproduzir
91. Parâmetro Padrão
11m
Reproduzir
92. "this" pode Variar
13m
Reproduzir
93. "this" e a Função bind #01
7m
Reproduzir
94. "this" e a Função bind #02
8m
Reproduzir
95. Funções Arrow #01
8m
Reproduzir
96. Funções Arrow #02
3m
Reproduzir
97. Funções Arrow #03
9m
Reproduzir
98. Funções Anônimas
9m
Reproduzir
99. Funções Callback #01
8m
Reproduzir
100. Funções Callback #02
10m
Reproduzir
101. Funções Callback #03
8m
Reproduzir
102. Funções Construtoras
10m
Reproduzir
103. Tipos de Declaração
6m
Reproduzir
104. Contexto Léxico
5m
Reproduzir
105. Closures
6m
Reproduzir
106. Função Factory #01
5m
Reproduzir
107. Função Factory #02
3m
Reproduzir
108. Classe vs Função Factory
8m
Reproduzir
109. Desafio Função Construtora
4m
Reproduzir
110. IIFE
6m
Reproduzir
111. Call & Apply
9m
Iniciar
112. Comparação entre string de números
1m
Iniciar
113. Lista de exercícios: Fundamentos, Estruturas de controle e Funções
1m
Lembretes de aprendizado
Eventos da agenda
Alguns minutos de estudo por dia valem a pena. Pesquisas mostram que os alunos que fazem do estudo um hábito têm maior probabilidade de alcançar suas metas. Reserve um tempo para estudar e receba lembretes usando seu programador de aprendizado.

Exige Google Calendar, Apple Calendar ou Outlook
Notificações por push
Não quer agendar grandes períodos? Defina um lembrete de aprendizado para receber notificações push do aplicativo móvel da Udemy.
Enviar uma mensagem com o link para baixar o aplicativo
Código telefônico do país

+1 (United States)
Número de telefone
123 456 7890
Ao informar seu número de telefone, você concorda em receber uma mensagem de texto única e automática com um link para obter o aplicativo. Tarifas padrão de envio de mensagens podem ser aplicadas.
Compartilhe seu conhecimento
Crie um curso em vídeo online, atraia alunos do mundo todo e ganhe dinheiro
As melhores empresas escolhem a Udemy Business para desenvolver as habilidades de carreira necessárias.
NasdaqVolkswagenBoxNetAppEventbrite
© 2023 Udemy, Inc.
112. Comparação entre string de números
Comparação entre string de números
E ai pessoal, hoje vou trazer um assunto interessante que acontece dentro do Javascript que é a comparação entre números em formato string.

Abaixo temos uma cadeia de string de números.

const cadeia_de_strings = '1, 2, 3, 4, 5, 6, 7, 8, 9'
Se pegarmos alguns dos valores da cadeia de strings e fizermos a comparação entre nossas strings de número até o nove, ela mantem um comportamento normal. Como se estivéssemos comparando números.

'1' > '2'
//output : false
'1' > '1'
//output : false
'2' > '1'
//output : true
'4' > '2'
//output : true
Agora se compararmos os valores depois do nove, a comparação irá validar o primeiro número da cadeia numeral, validando sua ordem alfabética. Por exemplo:

'2' > '12'
//output : true
'5' > '42'
//output : true
'3' > '29'
//output : true
Com isso, podemos ver que não é uma abordagem muito boa comparar números em formato de string.

*/