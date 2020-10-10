import { Context } from '@nuxt/types'

export default async function ({ app, store, $axios, route, redirect }: Context) {
    console.log('auth!!!!!!!!!!!!!!!')
    // サーバ処理時以外は無視
    if (!process.server) {
        return
    }

    // クッキーを取得
    const credential = app.$cookies.get('__cred__')

    if (!credential) {
        // 無視パターン定義
        const ignores = ['/hello', '/signup', '/activate']
        for (let i = 0; i < ignores.length; i++) {
            const regex = new RegExp(ignores[i], 'g')
            if (regex.test(route.path)) {
                return
            }
        }
    }

    // 無視パターン以外はクッキーからトークン復帰
    await store.dispatch('user/setToken', credential)

    if (credential) {
        try {
            // ユーザデータ取得
            const user = await $axios.$get('/user/me')
            await store.dispatch('user/setUser', user)
        } catch (e) {
            if (e.response != null) {
                if (e.response.status === 401) {
                    await store.dispatch('user/removeSession')
                    await store.dispatch('user/setToken', null)
                    return redirect('/signin')
                }
            } else {
                await store.dispatch('user/removeSession')
                await store.dispatch('user/setToken', null)
                return redirect('/hello')
            }
        }
    } else {
        return redirect('/hello')
    }
}
