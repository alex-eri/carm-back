<!--
    отобразить расписание, фильтр по дате,
    кнопка на добавление пользователя в расписание,
    кнопка перехода к справочнику пользователей
 -->

<template>
    <v-container fluid>
        <b-navbar>
            <b-navbar-nav>
                <b-nav-item to="/" title="Расписание">🏠</b-nav-item>
                <b-nav-item to="/users" title="Пользователи">👤</b-nav-item>
            </b-navbar-nav>
        </b-navbar>

        <b-table>
            <caption>
                Расписание c {{ start }} по {{ stop }}
            </caption>
            <b-tbody>
                <b-tr v-for="s in shedules">
                    <b-td>
                        {{ s.start }}-{{ s.stop }}
                    </b-td>
                    <b-td>
                        {{ s }}
                    </b-td>
                </b-tr>
            </b-tbody>
        </b-table>
    </v-container>
</template>

<script>

export default {
    async setup() {

        var start = new Date();
        start.setUTCHours(0, 0, 0, 0);

        var stop = new Date();
        stop.setUTCHours(23, 59, 59, 999);

        const shedules = await useFetch('/api/shedule/', { query: { start: start.toISOString(), stop: stop.toISOString() } })

        return { shedules, start, stop }

    }
}

</script>