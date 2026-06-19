arquivo = open('dados.txt', 'r')
linhas = arquivo.readlines()
arquivo.close()

print("Nome | Matricula | Média | Menção | Situação")

for linha in linhas:
    linha = linha.strip()
    
    if not linha:
        continue
        
    dados = linha.split(',')
    
    nome = dados[0]
    matricula = dados[1]
    n1 = float(dados[2])
    n2 = float(dados[3])
    n3 = float(dados[4])
    n4 = float(dados[5])
    
    media = (n1 + n2 + n3 + n4) / 4
    
    if media >= 0 and media <= 0.9:
        mencao = "SR"
    if media >= 1 and media <= 2.9:
        mencao = "II"
    if media >= 3 and media <= 4.9:
        mencao = "MI"
    if media >= 5 and media <= 6.9:
        mencao = "MM"
    if media >= 7 and media <= 8.9:
        mencao = "MS"
    if media >= 9 and media <= 10:
        mencao = "SS"
        
    if media >= 5.0:
        situacao = "Aprovado"
    if media < 5.0:
        situacao = "Reprovado"
        
    print(nome, "|", matricula, "|", media, "|", mencao, "|", situacao)