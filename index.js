'use strict';
const puppeteer = require('puppeteer');
(async () => {
    try {
        const unames = [
            "imeliaf29",
            "md.azis_354",
            // "generus_354_tawangmangu",
            "dedy_kurniawan_354",
            "nolik.3546",
            "fiyus_354",
            "amellibra_354",
            "david_fadhli_354",
            "rohman_3544",
            "isahlail_354",
            "dewiowen_354",
            "hafid_naufal354",
            "kaylaf.g_354",
            "tykaaa_354",
            "ahmaddddd_354",
            "argenta.354",
            "viraferdian_012",
            "ciputsupardi_354",
            "ahmadzainialfatah_354",
            "jokamnisty.354",
            "d.wahyudin.354",
            "khoirul.354",
            "hendrik_alie21_354",
            "goresanpena.354",
            "cholidjaya_354",
            "raffasha_354",
            "jokam_id",
            "ikhwan_354p",
            // "igenerus",
            "ayunovi_354",
            "adebasit_354",
            "alefarhat_354",
            "vndo.r_354",
            "iman_354_",
            "intanna_mua",
            "kelana_thejokam.354",
            "ihsanhanif58",
            "354agusyulianto",
            "gemilang.354",
            "quote_jokam",
            "destiyasyuslikhani_354",
            "aji.susanto.773",
            "daffa.sport.354",
            "agustins_354",
            // "mudamudi354_repost",
            "sapikita_354",
            "bang_zainal_354",
            "grosir.abayasholat",
            "istik_nur_khayati",
            "nsyah5_id",
            "irsandi_313",
            "nurinryuki_354",
            "kinkin.354",
            "iksan_buqori",
            "pangkasrambut_idola",
            "defa.354",
            "354_najiha",
            "rk5tp_story354",
            "adeliasalsa_3547",
            "ahmadsuwitro_354",
            "roffi_354",
            "vaa_354_djokam",
            "kyyis_354",
            // "generusjokam354",
            "burhan_354madiun",
            "3gar_354",
            "khairunisaziza",
            "hendra_ari_setiawan12",
            "rival.id_354_",
            "myshintaangelly_354",
            "fahrudin_354",
            "lusi_354",
            "mbaklia_354",
            "rini_ryiiinbiii.354",
            "bydee___",
            "malihah_354",
            "m.reyn_354",
            "arnanda.david",
            "my_sisterillah_354",
            "lalala__354",
            "juwita.354",
            "husni_3546",
            "tegar.setyo.354",
            "djokam.bilkis20.07",
            "viddd_354",
            "nurman.354",
            "mas_naim.354",
            "sofie_354",
            "354agus_ganteng",
            "mulianifitria.354",
            "adriani862",
            "arsiduta354",
            "_aziz_354",
            "rhijal_354",
            "ajariea_354",
            "undangan354solo",
            "mumi_karamabura.id.313",
            "354_03_08_2022",
            "alarif.354",
            "x9_apparel",
            "anasabdul.354",
            "indra_35458",
            "rozikin571",
            // "jokam_354_repost",
            "rivo_354",
            "suliskoima_354",
            "sudarto_354",
            "maulanacx_354",
            // "jokamhits_354",
            "ql_354",
            "theonlysekar_354",
            "wahyu_m.354",
            "inzaqi_eka354",
            "ardiansyahuus354",
            "ronald35485",
            "ibnu_sihab354",
            "gentas_354",
            "aregafc_354",
            "354.313.337",
            "cak_legh.354",
            "m_afani_354",
            "anisa_nur_354",
            "meisyi_354",
            "f_11_o_354",
            "cacacia_354",
            "bramantyo152011",
            "syahrildjokam",
            "aisya_jul_20",
            "emiltikadari",
            "jokam_354__",
            "rofiq5279"
        ]
        const browser = await puppeteer.launch({
            defaultViewport: null,
            ignoreHTTPSErrors: true,
            slowMo: 100,
            headless: false,
            // devtools: true
        })

        const [page] = await browser.pages()
        const sessionId =
            // `3abd347c205f9f68e1b1392a0f74e187`
            `3559488003%3AYYC5bbTkfkxsk9%3A3%3AAYfFEb-MoKlabnGx957NGY2Bh7zBPxRc70sw6hTiu6g`

        await page.setCookie({
            name: `sessionid`,
            value: sessionId,
            domain: '.instagram.com',
            path: '/',
            expires: -1,
            size: sessionId.length,
            httpOnly: false,
            secure: true,
            session: false,
            sameSite: 'None',
            sameParty: false,
            sourceScheme: 'Secure',
            sourcePort: 443
        })
        await page.goto(`https://www.instagram.com/imeliaf29/`)

        // await page.waitForSelector(`main`)
        await click(`main`)
        // const last_post = `[href^="/p"]`
        // await click(last_post)
        // await browser.close()
    } catch (e) {
        console.error(e)
    }
})()

const click = async function (page, selector) {
    await page.waitForSelector(selector)
    await page.hover(selector)
    await page.$eval(selector, (btn) => btn.click())
}

const type = async function (page, selector, letters) {
    await page.waitForSelector(selector)
    await page.hover(selector)
    await page.focus(selector)
    await page.keyboard.type(letters)
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms))
const random = function (min, max) { return Math.floor(Math.random() * (max - min + 1) + min) }

/*
    https://www.instagram.com/polo.kasimpar/following/
    put keyword

    collect accounts
    var links = []
    for (var link of document.querySelectorAll(`[style="height: 44px; width: 44px;"]`)) if (null !== link.getAttribute(`href`))links.push(link.getAttribute(`href`).replaceAll(`/`, ``))
    console.log(JSON.stringify(links))

    last posting
    document.querySelectorAll(`[href^="/p"]`)[1].getAttribute(`href`)
*/