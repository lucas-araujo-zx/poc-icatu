export const SINISTRO_CATALOG = {
  "vida": [
    {
      "nome": "Morte Natural",
      "coberturas": [
        {
          "id": "mns",
          "nome": "Morte Natural do Segurado",
          "documentos": [
            {
              "id": "mns-rgCpf",
              "nome": "Cópia da Carteira de Identidade e CPF do segurado principal",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mns-rgCpfBenef",
              "nome": "Cópia da Carteira de Identidade e CPF dos beneficiários",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mns-certidaoCasamento",
              "nome": "Cópia da Certidão de Casamento com averbação do Óbito do segurado",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mns-certidaoNascimento",
              "nome": "Cópia da Certidão de Nascimento dos beneficiários (filhos menores de 16 anos)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mns-certidaoObito",
              "nome": "Cópia da Certidão de Óbito do segurado/sinistrado",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mns-cResidencia",
              "nome": "Cópia do Comprovante de Residência do segurado, expedido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mns-cResidenciaBenef",
              "nome": "Cópia do Comprovante de Residência dos beneficiários, expedido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mns-uniaoEstavel",
              "nome": "Cópia de documentos para comprovação de União Estável, companheiro(a) como beneficiário(a)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mns-fre",
              "nome": "Cópia do FRE - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mns-gfipSefip",
              "nome": "Cópia do GFIP e SEFIP - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mns-patologia",
              "nome": "Cópia dos Laudos e Exames referentes à patologia",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mns-prontuario",
              "nome": "Cópia do Prontuário Médico do segurado.",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mns-avSinistro",
              "nome": "Aviso de Sinistro (Obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mns-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mns-herdeiros",
              "nome": "Declaração de Herdeiros Legais assinada pelos herdeiros legais com reconhecimento de firma em cartório.",
              "obrigatorio": false,
              "condicional": true
            }
          ]
        },
        {
          "id": "mnc",
          "nome": "Morte Natural do Cônjuge",
          "documentos": [
            {
              "id": "mnc-rgCpf",
              "nome": "Cópia da Carteira de Identidade e CPF do segurado principal",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mnc-docSinistrado",
              "nome": "Carteira de Identidade e CPF do sinistrado",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mnc-certidaoCasamento",
              "nome": "Cópia da Certidão de Casamento com averbação do Óbito do segurado",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mnc-certidaoObito",
              "nome": "Cópia da Certidão de Óbito do segurado/sinistrado",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mnc-cResidencia",
              "nome": "Cópia do Comprovante de Residência do segurado, expedido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mnc-uniaoEstavel",
              "nome": "Cópia de documentos para comprovação de União Estável, companheiro(a) como beneficiário(a)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mnc-fre",
              "nome": "Cópia do FRE - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mnc-gfipSefip",
              "nome": "Cópia do GFIP e SEFIP - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mnc-patologia",
              "nome": "Cópia dos Laudos e Exames referentes à patologia",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mnc-prontuario",
              "nome": "Cópia do Prontuário Médico do segurado.Apenas para segurados que preencheram a Declaração Pessoal de Saúde na contratação da apólice",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mnc-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mnc-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            }
          ]
        },
        {
          "id": "mnf",
          "nome": "Morte Natural dos Filhos",
          "documentos": [
            {
              "id": "mnf-rgCpf",
              "nome": "Cópia da Carteira de Identidade e CPF do segurado principal",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mnf-sinistrado",
              "nome": "Carteira de Identidade e CPF do sinistrado",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mnf-certidaoObito",
              "nome": "Cópia da Certidão de Óbito do segurado/sinistrado",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mnf-cResidencia",
              "nome": "Cópia do Comprovante de Residência do segurado, expedido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mnf-fre",
              "nome": "Cópia do FRE - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mnf-gfipSefip",
              "nome": "Cópia do GFIP e SEFIP - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mnf-patologia",
              "nome": "Cópia dos Laudos e Exames referentes à patologia",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mnf-nfDespesas",
              "nome": "Notas fiscais originais discriminadas comprovando os gastos em função das despesas ocorridas com o funeral do segurado/sinistrado para menores de 14 anos.",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mnf-prontuario",
              "nome": "Cópia do Prontuário Médico do segurado.Apenas para segurados que preencheram a Declaração Pessoal de Saúde na contratação da apólice",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mnf-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mnf-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            }
          ]
        }
      ]
    },
    {
      "nome": "Morte Acidental",
      "coberturas": [
        {
          "id": "mas",
          "nome": "Morte Acidental do Segurado",
          "documentos": [
            {
              "id": "mas-rgCpf",
              "nome": "Cópia da Carteira de Identidade e CPF do segurado principal",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mas-rgCpfBenef",
              "nome": "Cópia da Carteira de Identidade e CPF dos beneficiários",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mas-cnh",
              "nome": "Cópia da Carteira Nacional de Habilitação em caso de acidente com veículo dirigido pelo segurado",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mas-brat",
              "nome": "Cópia do Boletim de Registro de Acidente de Trânsito (BRAT) em caso de acidente de trânsito",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mas-bo",
              "nome": "Cópia do Boletim de Ocorrência Policial (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mas-certidaoCasamento",
              "nome": "Cópia da Certidão de Casamento com averbação do Óbito do segurado",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mas-certidaoNascimento",
              "nome": "Cópia da Certidão de Nascimento dos beneficiários (filhos menores de 16 anos)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mas-certidaoObito",
              "nome": "Cópia da Certidão de Óbito do segurado/sinistrado",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mas-cResidencia",
              "nome": "Cópia do Comprovante de Residência do segurado, expedido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mas-cResidenciaBenef",
              "nome": "Cópia do Comprovante de Residência dos beneficiários, expedido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mas-uniaoEstavel",
              "nome": "Cópia de documentos para comprovação de União Estável, companheiro(a) como beneficiário(a)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mas-fre",
              "nome": "Cópia do FRE - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mas-gfipSefip",
              "nome": "Cópia do GFIP e SEFIP - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mas-patologia",
              "nome": "Cópia dos Laudos e Exames referentes à patologia",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mas-necropsia",
              "nome": "Cópia do Laudo de Necropsia (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mas-toxicologico",
              "nome": "Cópia do Laudo do exame toxicológico e de teor alcoólico (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mas-prontuario",
              "nome": "Cópia do Prontuário Médico do segurado.Apenas para segurados que preencheram a Declaração Pessoal de Saúde na contratação da apólice",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mas-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mas-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mas-herdeiros",
              "nome": "Declaração de Herdeiros Legais",
              "obrigatorio": false,
              "condicional": true
            }
          ]
        },
        {
          "id": "mac",
          "nome": "Morte Acidental do Cônjuge",
          "documentos": [
            {
              "id": "mac-rgCpf",
              "nome": "Cópia da Carteira de Identidade e CPF do segurado principal",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mac-sinistrado",
              "nome": "Carteira de Identidade e CPF do sinistrado",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mac-cnh",
              "nome": "Cópia da Carteira Nacional de Habilitação em caso de acidente com veículo dirigido pelo segurado",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mac-brat",
              "nome": "Cópia do Boletim de Registro de Acidente de Trânsito (BRAT) em caso de acidente de trânsito",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mac-bo",
              "nome": "Cópia do Boletim de Ocorrência Policial (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mac-certidaoCasamento",
              "nome": "Cópia da Certidão de Casamento com averbação do Óbito do segurado",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mac-certidaoObito",
              "nome": "Cópia da Certidão de Óbito do segurado/sinistrado",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mac-cResidencia",
              "nome": "Cópia do Comprovante de Residência do segurado, expedido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mac-uniaoEstavel",
              "nome": "Cópia de documentos para comprovação de União Estável, companheiro(a) como beneficiário(a)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mac-fre",
              "nome": "Cópia do FRE - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mac-gfipSefip",
              "nome": "Cópia do GFIP e SEFIP - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mac-patologia",
              "nome": "Cópia dos Laudos e Exames referentes à patologia",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mac-necropsia",
              "nome": "Cópia do Laudo de Necropsia (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mac-toxicologico",
              "nome": "Cópia do Laudo do exame toxicológico e de teor alcoólico (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mac-prontuario",
              "nome": "Cópia do Prontuário Médico do segurado.Apenas para segurados que preencheram a Declaração Pessoal de Saúde na contratação da apólice",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "mac-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "mac-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            }
          ]
        },
        {
          "id": "maf",
          "nome": "Morte Acidental dos Filhos",
          "documentos": [
            {
              "id": "maf-rgCpf",
              "nome": "Cópia da Carteira de Identidade e CPF do segurado principal",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "maf-docSinistrado",
              "nome": "Carteira de Identidade e CPF do sinistrado",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "maf-cnh",
              "nome": "Cópia da Carteira Nacional de Habilitação em caso de acidente com veículo dirigido pelo segurado",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "maf-brat",
              "nome": "Cópia do Boletim de Registro de Acidente de Trânsito (BRAT) em caso de acidente de trânsito",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "maf-bo",
              "nome": "Cópia do Boletim de Ocorrência Policial (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "maf-certidaoObito",
              "nome": "Cópia da Certidão de Óbito do segurado/sinistrado",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "maf-cResidencia",
              "nome": "Cópia do Comprovante de Residência do segurado, expedido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "maf-fre",
              "nome": "Cópia do FRE - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "maf-gfipSefip",
              "nome": "Cópia do GFIP e SEFIP - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "maf-patologia",
              "nome": "Cópia dos Laudos e Exames referentes à patologia",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "maf-necropsia",
              "nome": "Cópia do Laudo de Necropsia (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "maf-toxicologico",
              "nome": "Cópia do Laudo do exame toxicológico e de teor alcoólico (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "maf-prontuario",
              "nome": "Cópia do Prontuário Médico do segurado.Apenas para segurados que preencheram a Declaração Pessoal de Saúde na contratação da apólice",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "maf-nfDespesas",
              "nome": "Notas fiscais originais discriminadas comprovando os gastos em função das despesas ocorridas com o funeral do segurado/sinistrado para menores de 14 anos",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "maf-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "maf-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            }
          ]
        }
      ]
    },
    {
      "nome": "Invalidez",
      "coberturas": [
        {
          "id": "itd",
          "nome": "Invalidez Permanente Total por Doença",
          "documentos": [
            {
              "id": "itd-rgCpf",
              "nome": "Cópia da Carteira de Identidade e CPF do segurado principal",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "itd-cnh",
              "nome": "Cópia da Carteira Nacional de Habilitação em caso de acidente com veículo dirigido pelo segurado",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "itd-cResidencia",
              "nome": "Cópia do Comprovante de Residência do segurado, expedido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "itd-bo",
              "nome": "Cópia do Boletim de Ocorrência Policial (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "itd-cat",
              "nome": "Cópia do Comunicado de Acidente de Trabalho (CAT) (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "itd-lesaoSequela",
              "nome": "Exames Médicos relacionados com a lesão/sequela",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "itd-fre",
              "nome": "Cópia do FRE - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "itd-gfipSefip",
              "nome": "Cópia do GFIP e SEFIP - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "itd-toxicologico",
              "nome": "Cópia do Laudo do exame toxicológico e de teor alcoólico (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "itd-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "itd-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "itd-acidentesPessoais",
              "nome": "acidentesPessoais",
              "obrigatorio": true,
              "condicional": false
            }
          ]
        },
        {
          "id": "ifd",
          "nome": "Invalidez Funcional Permanente Total por Doença",
          "documentos": [
            {
              "id": "ifd-rgCpf",
              "nome": "Cópia da Carteira de Identidade e CPF do segurado principal",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ifd-cResidencia",
              "nome": "Cópia do Comprovante de Residência do segurado, expedido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ifd-relaMedico",
              "nome": "Relatório médico",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ifd-fre",
              "nome": "Cópia do FRE - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ifd-gfipSefip",
              "nome": "Cópia do GFIP e SEFIP - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ifd-patologia",
              "nome": "Cópia dos Laudos e Exames referentes à patologia",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ifd-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ifd-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ifd-declaracaoMedica",
              "nome": "Declaração Médica",
              "obrigatorio": true,
              "condicional": false
            }
          ]
        },
        {
          "id": "ipa",
          "nome": "Invalidez Permanente Total ou Parcial por Acidente",
          "documentos": [
            {
              "id": "ipa-rgCpf",
              "nome": "Cópia da Carteira de Identidade e CPF do segurado principal",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ipa-cnh",
              "nome": "Cópia da Carteira Nacional de Habilitação em caso de acidente com veículo dirigido pelo segurado",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ipa-brat",
              "nome": "Cópia do Boletim de Registro de Acidente de Trânsito (BRAT) em caso de acidente de trânsito",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ipa-bo",
              "nome": "Cópia do Boletim de Ocorrência Policial (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ipa-cResidencia",
              "nome": "Cópia do Comprovante de Residência do segurado, expedido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ipa-cat",
              "nome": "Cópia do Comunicado de Acidente de Trabalho (CAT) (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ipa-lesaoSequela",
              "nome": "Exames Médicos relacionados com a lesão/sequela",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ipa-fre",
              "nome": "Cópia do FRE - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ipa-gfipSefip",
              "nome": "Cópia do GFIP e SEFIP - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ipa-toxicologico",
              "nome": "Cópia do Laudo do exame toxicológico e de teor alcoólico (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ipa-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ipa-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ipa-dMedicaAC",
              "nome": "Declaração Médica de Acidente",
              "obrigatorio": true,
              "condicional": false
            }
          ]
        },
        {
          "id": "ipac",
          "nome": "Invalidez Permanente Total ou Parcial por Acidente – Cônjuge",
          "documentos": [
            {
              "id": "ipac-rgCpf",
              "nome": "Cópia da Carteira de Identidade e CPF do segurado principal",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ipac-docSinistrado",
              "nome": "Carteira de Identidade e CPF do sinistrado",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ipac-cnh",
              "nome": "Cópia da Carteira Nacional de Habilitação em caso de acidente com veículo dirigido pelo segurado",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ipac-brat",
              "nome": "Cópia do Boletim de Registro de Acidente de Trânsito (BRAT) em caso de acidente de trânsito",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ipac-bo",
              "nome": "Cópia do Boletim de Ocorrência Policial (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ipac-certidaoCasamento",
              "nome": "Cópia da Certidão de Casamento com averbação do Óbito do segurado",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ipac-cResidencia",
              "nome": "Cópia do Comprovante de Residência do segurado, expedido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ipac-cResidenciaBenef",
              "nome": "Cópia do Comprovante de Residência dos beneficiários, expedido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ipac-uniaoEstavel",
              "nome": "Cópia de documentos para comprovação de União Estável, companheiro(a) como beneficiário(a)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ipac-lesaoSequela",
              "nome": "Exames Médicos relacionados com a lesão/sequela",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ipac-fre",
              "nome": "Cópia do FRE - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ipac-gfipSefip",
              "nome": "Cópia do GFIP e SEFIP - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ipac-toxicologico",
              "nome": "Cópia do Laudo do exame toxicológico e de teor alcoólico (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ipac-prontuario",
              "nome": "Cópia do Prontuário Médico do segurado.Apenas para segurados que preencheram a Declaração Pessoal de Saúde na contratação da apólice",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ipac-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ipac-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ipac-dMedicaAC",
              "nome": "Declaração Médica de Acidente",
              "obrigatorio": true,
              "condicional": false
            }
          ]
        },
        {
          "id": "ipal",
          "nome": "Invalidez Permanente Total ou Parcial por Acidente em Local",
          "documentos": [
            {
              "id": "ipal-rgCpf",
              "nome": "Cópia da Carteira de Identidade e CPF do segurado principal",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ipal-cnh",
              "nome": "Cópia da Carteira Nacional de Habilitação em caso de acidente com veículo dirigido pelo segurado",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ipal-brat",
              "nome": "Cópia do Boletim de Registro de Acidente de Trânsito (BRAT) em caso de acidente de trânsito",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ipal-bo",
              "nome": "Cópia do Boletim de Ocorrência Policial (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ipal-cResidencia",
              "nome": "Cópia do Comprovante de Residência do segurado, expedido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ipal-cat",
              "nome": "Cópia do Comunicado de Acidente de Trabalho (CAT) (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ipal-lesaoSequela",
              "nome": "Exames Médicos relacionados com a lesão/sequela",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ipal-fre",
              "nome": "Cópia do FRE - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ipal-gfipSefip",
              "nome": "Cópia do GFIP e SEFIP - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ipal-toxicologico",
              "nome": "Cópia do Laudo do exame toxicológico e de teor alcoólico (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ipal-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ipal-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ipal-dMedicaAC",
              "nome": "Declaração Médica de Acidente",
              "obrigatorio": true,
              "condicional": false
            }
          ]
        }
      ]
    },
    {
      "nome": "Diária por Incapacidade Temporária",
      "coberturas": [
        {
          "id": "did",
          "nome": "Diária por Incapacidade Temporária por Doença",
          "documentos": [
            {
              "id": "did-rgCpf",
              "nome": "Cópia da Carteira de Identidade e CPF do segurado principal",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "did-cResidencia",
              "nome": "Cópia do Comprovante de Residência do segurado, expedido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "did-radiologica",
              "nome": "Chapa Radiológica (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "did-compRendimento",
              "nome": "Cópia do Comprovante de Rendimento",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "did-comunicacao",
              "nome": "Cópia da Comunicação de Resultado do exame Médico",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "did-patologia",
              "nome": "Cópia dos Laudos e Exames referentes à patologia",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "did-prontuario",
              "nome": "Cópia do Prontuário Médico do seguradoApenas para segurados que preencheram a Declaração Pessoal de Saúde na contratação da apólice.",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "did-relMedico",
              "nome": "Relatório Médico informando diagnóstico, evolução, tratamento e o tempo de afastamento do trabalho",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "did-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "did-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "did-avConcessao",
              "nome": "Formulário de concessão",
              "obrigatorio": true,
              "condicional": false
            }
          ]
        },
        {
          "id": "dia",
          "nome": "Diária por Incapacidade Temporária por Acidente",
          "documentos": [
            {
              "id": "dia-rgCpf",
              "nome": "Cópia da Carteira de Identidade e CPF do segurado principal",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "dia-cResidencia",
              "nome": "Cópia do Comprovante de Residência do segurado, expedido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "dia-brat",
              "nome": "Cópia do Boletim de Registro de Acidente de Trânsito (BRAT) em caso de acidente de trânsito",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "dia-bo",
              "nome": "Cópia do Boletim de Ocorrência Policial (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "dia-boletimAtend",
              "nome": "Boletim do Primeiro Atendimento Hospitalar",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "dia-radiologica",
              "nome": "Chapa Radiológica (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "dia-compRendimento",
              "nome": "Cópia do Comprovante de Rendimento",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "dia-resultadoMedico",
              "nome": "Cópia da Comunicação de Resultado do exame Médico",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "dia-patologia",
              "nome": "Cópia dos Laudos e Exames referentes à patologia",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "dia-prontuario",
              "nome": "Cópia do Prontuário Médico do seguradoApenas para segurados que preencheram a Declaração Pessoal de Saúde na contratação da apólice.",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "dia-relMedico",
              "nome": "Relatório Médico informando diagnóstico, evolução, tratamento e o tempo de afastamento do trabalho",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "dia-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "dia-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "dia-avConcessao",
              "nome": "Formulário de concessão",
              "obrigatorio": true,
              "condicional": false
            }
          ]
        }
      ]
    },
    {
      "nome": "Serviços e Assistências",
      "coberturas": [
        {
          "id": "af",
          "nome": "Assistência Funeral",
          "documentos": [
            {
              "id": "af-certidaoObito",
              "nome": "Cópia da Certidão de Óbito do segurado/sinistrado",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "af-rgCpf",
              "nome": "Cópia da Carteira de Identidade e CPF do segurado principal",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "af-rgCpfCusteio",
              "nome": "Cópia da Carteira de Identidade e CPF do responsável pelo custeio com as despesas do funeral",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "af-cResidencia",
              "nome": "Cópia do Comprovante de Residência do segurado/sinistrado, expedido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "af-cResidenciaCusteio",
              "nome": "Cópia do Comprovante de Residência do responsável pelo custeio com as despesas do funeral, expedido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "af-nfDespesas",
              "nome": "Notas Fiscais originais discriminados comprovando os gastos referente a despesas ocorridas com funeral",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "af-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "af-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            }
          ]
        }
      ]
    },
    {
      "nome": "Diária de Internação Hospitalar (DIH)",
      "coberturas": [
        {
          "id": "dih",
          "nome": "Diária de Internação Hospitalar - Segurado",
          "documentos": [
            {
              "id": "dih-rgCpf",
              "nome": "Cópia da Carteira de Identidade e CPF do segurado principal",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "dih-cnh",
              "nome": "Cópia da Carteira Nacional de Habilitação em caso de acidente com veículo dirigido pelo Segurado",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "dih-brat",
              "nome": "Cópia do Boletim de Registro de Acidente de Trânsito (BRAT) em caso de acidente de trânsito",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "dih-bo",
              "nome": "Cópia do Boletim de Ocorrência Policial (se houver)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "dih-cResidencia",
              "nome": "Cópia do Comprovante de Residência do segurado, expedido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "dih-prontuario",
              "nome": "Cópia do Prontuário Médico do segurado.Apenas para segurados que preencheram a Declaração Pessoal de Saúde na contratação da apólice",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "dih-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "dih-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "dih-avConcessao",
              "nome": "Formulário de concessão",
              "obrigatorio": true,
              "condicional": false
            }
          ]
        }
      ]
    },
    {
      "nome": "Perda Involuntária de renda - (PIE)",
      "coberturas": [
        {
          "id": "pie",
          "nome": "Perda Involuntária de Renda – Segurado",
          "documentos": [
            {
              "id": "pie-rgCpf",
              "nome": "Cópia da Carteira de Identidade e CPF do segurado principal",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "pie-cResidencia",
              "nome": "Cópia do Comprovante de Residência do segurado, expedido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "pie-cTrabalho",
              "nome": "Cópia da CTPS digital completa e com a emissão posterior ao 31º dia da demissão impresso pelo site www.gov.br ou pelo aplicativo Carteira de Trabalho Digital",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "pie-cRescisao",
              "nome": "Cópia do Termo de Rescisão de contrato de trabalho homologado no TRT",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "pie-fre",
              "nome": "Cópia do FRE - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "pie-gfipSefip",
              "nome": "Cópia do GFIP e SEFIP - Somente para Seguros Empresariais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "pie-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "pie-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            }
          ]
        }
      ]
    },
    {
      "nome": "Doenças Graves - (DG)",
      "coberturas": [
        {
          "id": "dgSegurado",
          "nome": "Doenças Graves – Segurado",
          "documentos": [
            {
              "id": "dgSegurado-rgCpf",
              "nome": "Cópia da Carteira de Identidade e CPF do segurado",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "dgSegurado-cResidencia",
              "nome": "Cópia do Comprovante de Residência do segurado, expedido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "dgSegurado-patologia",
              "nome": "Cópia dos Laudos e Exames referentes à patologia",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "dgSegurado-decMedicaDoenca",
              "nome": "Declaração Médica por Doença",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "dgSegurado-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "dgSegurado-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            }
          ]
        }
      ]
    }
  ],
  "previdencia": [
    {
      "nome": "Pecúlio/Pensão",
      "coberturas": [
        {
          "id": "ppa",
          "nome": "Pecúlio/Pensão por Acidente",
          "documentos": [
            {
              "id": "ppa-examesLaudosMedicos",
              "nome": "Cópia simples de Exames e Laudos Médicos, que estejam relacionados com a lesão/sequela do Participante/Segurado",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ppa-boBratRo",
              "nome": "boBratRo",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ppa-cnh",
              "nome": "Cópia autenticada da CNHCaso trata-se de acidente automobilístico onde o Participante/ Segurado figure como condutor do veículo.",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ppa-rgCpfResidencia",
              "nome": "rgCpfResidencia",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ppa-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ppa-decMedicaAcid",
              "nome": "Declaração Médica de Acidente",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ppa-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            }
          ]
        },
        {
          "id": "ppd",
          "nome": "Pecúlio/Pensão por Doença",
          "documentos": [
            {
              "id": "ppd-patologia",
              "nome": "Cópia simples de Exames e Laudos Médicos, que estejam relacionados com a patologia incapacitante do Participante/Segurado",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ppd-prontuario",
              "nome": "Cópia simples do Prontuário Médico do Participante/Segurado",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ppd-rgCpfResidencia",
              "nome": "rgCpfResidencia",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ppd-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ppd-decMedicaDoenca",
              "nome": "Declaração Médica por Doença",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ppd-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            }
          ]
        }
      ]
    },
    {
      "nome": "Invalidez",
      "coberturas": [
        {
          "id": "ia",
          "nome": "Invalidez por Acidente",
          "documentos": [
            {
              "id": "ia-lesaoSequela",
              "nome": "Exames Médicos relacionados com a lesão/sequela",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ia-cnh",
              "nome": "Cópia da Carteira Nacional de Habilitação em caso de acidente com veículo dirigido pelo Segurado/Participante",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "ia-rgCpfResidencia",
              "nome": "Cópia da Carteira do RG, CPF e Comprovante de Residência do Segurado/Participante, expedido nos últimos 180 dias do Segurado/Participante",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ia-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ia-decMedicaAcid",
              "nome": "Declaração Médica de Acidente",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "ia-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            }
          ]
        },
        {
          "id": "id",
          "nome": "Invalidez por Doença",
          "documentos": [
            {
              "id": "id-patologia",
              "nome": "Cópia dos Laudos e Exames referentes à patologia",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "id-prontuario",
              "nome": "Cópia do Prontuário Médico (apenas para Segurado/Participante que preencheram a Declaração Pessoal de Saúde na contratação do plano)",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "id-rgCpfResidencia",
              "nome": "Cópia da Carteira do RG, CPF e Comprovante de Residência do Segurado/Participante, expedido nos últimos 180 dias do Segurado/Participante",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "id-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "id-decMedicaDoenca",
              "nome": "Declaração Médica por Doença",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "id-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            }
          ]
        }
      ]
    },
    {
      "nome": "Liberação de Reserva por Morte",
      "coberturas": [
        {
          "id": "lci",
          "nome": "Liberação de Reserva por Morte com indicação de beneficiário",
          "documentos": [
            {
              "id": "lci-certObito",
              "nome": "Cópia simples da Certidão de Óbito do Participante",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "lci-docParticipante",
              "nome": "Cópia simples do RG e CPF do Participante",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "lci-rgCpfBenef",
              "nome": "Cópia simples do RG, CPF e Comprovante de Residência de todos os beneficiários designados do Participante, emitido nos últimos 180 dias",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "lci-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "lci-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            }
          ]
        },
        {
          "id": "lsi",
          "nome": "Liberação de Reserva por Morte sem indicação de beneficiário",
          "documentos": [
            {
              "id": "lsi-certObito",
              "nome": "Cópia simples da Certidão de Óbito do Participante",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "lsi-docParticipante",
              "nome": "Cópia simples do RG e CPF do Participante",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "lsi-herdeiros",
              "nome": "Cópia simples do RG, CPF e Comprovante de Residência de todos os herdeiros legais do Participante, emitido nos últimos 180 dias.",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "lsi-casamentoPart",
              "nome": "Cópia simples e atualizada da Certidão de Casamento do Participante com averbação do óbito desteQuanto tratar-se de Participante com estado civil Casado.",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "lsi-herdeiros",
              "nome": "Declaração de Herdeiros Legais",
              "obrigatorio": false,
              "condicional": true
            },
            {
              "id": "lsi-avSinistro",
              "nome": "Aviso de Sinistro (obrigatório)",
              "obrigatorio": true,
              "condicional": false
            },
            {
              "id": "lsi-pagamento",
              "nome": "Autorização de Pagamento",
              "obrigatorio": true,
              "condicional": false
            }
          ]
        }
      ]
    }
  ]
};
