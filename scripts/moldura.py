#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Monta as capturas da app dentro da moldura de iPhone, para o carrossel do site.

A moldura nao e desenhada: e recortada de uma maqueta real — com os reflexos, os
botoes laterais e os cantos como deve ser — e o ecra e substituido pela captura
nova. Assim o carrossel fica com aspeto de produto sem termos de voltar a tirar
as capturas dentro de um gerador de maquetas.

Correr a partir da raiz do site:  python3 scripts/moldura.py
"""

import os
import numpy as np
from PIL import Image, ImageFilter

MAQUETA = os.path.expanduser("~/Pictures/Prints/01-bem-vindo.png")
BOX = (667, 28, 1587, 1905)          # o aparelho dentro da maqueta
CAPTURAS = "/Users/wandersonscheng/Codigos.py/guiafin/appstore/screenshots/iphone-6.9"
DESTINO = "public/guiafin"
LARGURA = 900                        # largura final da imagem com moldura

MAPA = {
    "01_inicio": "app-dash",
    "04_prestacoes": "app-install",
    "02_movimentos": "app-movements",
    "03_analises": "app-annual",
    "05_cartao": "app-card",
    "06_metas": "app-goal",
}


def preencher(mascara):
    """Preenche cada linha entre o primeiro e o ultimo pixel ligado.

    O ecra tem a ilha dinamica preta ao centro e a moldura e preta em volta; sem
    este preenchimento a ilha abria um buraco no meio da mascara.
    """
    h, w = mascara.shape
    out = np.zeros((h, w), bool)
    idx = np.arange(w)
    for r in range(h):
        row = mascara[r]
        if row.sum() < 4:
            continue
        out[r, idx[row][0]:idx[row][-1] + 1] = True
    return out


def moldura():
    """Devolve (aparelho RGB, mascara do aparelho, mascara do ecra, caixa do ecra)."""
    im = Image.open(MAQUETA).convert("RGB").crop(BOX)
    a = np.array(im).astype(int)
    sil = preencher(a.sum(2) < 330)
    ecra = preencher((a.sum(2) > 690) & sil)

    ys, xs = np.where(ecra)
    caixa = (int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1)

    def suave(m):
        img = Image.fromarray((m * 255).astype("uint8"))
        return img.filter(ImageFilter.GaussianBlur(1.2)).point(lambda v: 255 if v > 128 else 0)

    return im, suave(sil), suave(ecra), caixa


def main():
    dev, m_dev, m_ecra, (x0, y0, x1, y1) = moldura()
    largura_ecra, altura_ecra = x1 - x0, y1 - y0

    for origem, nome in MAPA.items():
        cap = Image.open(os.path.join(CAPTURAS, origem + ".png")).convert("RGB")
        cap = cap.resize((largura_ecra, altura_ecra), Image.LANCZOS)

        out = dev.copy()
        out.paste(cap, (x0, y0), m_ecra.crop((x0, y0, x1, y1)))

        out = out.convert("RGBA")
        out.putalpha(m_dev)

        h = round(out.size[1] * LARGURA / out.size[0])
        out = out.resize((LARGURA, h), Image.LANCZOS)

        alvo = os.path.join(DESTINO, nome + "-frame")
        out.save(alvo + ".webp", quality=86, method=6)   # webp guarda a transparencia
        out.save(alvo + ".png", optimize=True)
        print(nome, out.size, os.path.getsize(alvo + ".webp") // 1024, "KB")


# Maqueta do heroi: ecra inicial em modo claro, com a app cheia. A caixa foi
# medida nesta maqueta em concreto (canvas 1322x1932), que nao tem nada escuro
# fora do aparelho — por isso o recorte sai limpo.
HEROI_MAQUETA = os.path.expanduser("~/Pictures/Prints/Captura de ecrã 2026-09-30, às 11.56.23.png")
HEROI_BOX = (212, 24, 1137, 1903)


def heroi():
    """Recorta o telemovel da maqueta do ecra inicial em modo claro.

    Esta nao precisa de troca de ecra: a maqueta ja tem a captura certa la
    dentro. O heroi usa o modo claro de proposito — sobre o fundo claro da
    pagina, um ecra escuro dentro da moldura le-se como um retangulo preto,
    enquanto o claro faz o aparelho parecer ligado.
    """
    im = Image.open(HEROI_MAQUETA).convert("RGB").crop(HEROI_BOX)
    a = np.array(im).astype(int)
    sil = preencher(a.sum(2) < 330)
    m = Image.fromarray((sil * 255).astype("uint8"))
    m = m.filter(ImageFilter.GaussianBlur(1.2)).point(lambda v: 255 if v > 128 else 0)

    out = im.convert("RGBA")
    out.putalpha(m)
    h = round(out.size[1] * LARGURA / out.size[0])
    out = out.resize((LARGURA, h), Image.LANCZOS)

    alvo = os.path.join(DESTINO, "app-dash-light-frame")
    out.save(alvo + ".webp", quality=88, method=6)
    out.save(alvo + ".png", optimize=True)
    print("heroi (modo claro)", out.size, os.path.getsize(alvo + ".webp") // 1024, "KB")


if __name__ == "__main__":
    main()
    heroi()
