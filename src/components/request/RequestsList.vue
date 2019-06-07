<template>
    <mdb-container>
        <mdb-row>
        <mdb-col lg="2">
            <Search />
        </mdb-col>
        <mdb-col lg="10">
            <Result />
        </mdb-col>
        </mdb-row>
  </mdb-container>
</template>

<script>
import Search from './request-list/Search'
import Result from './request-list/Result'

import {mdbContainer, mdbRow, mdbCol} from 'mdbvue'
export default {
    components : { Search, Result, mdbContainer, mdbRow, mdbCol }
}
</script>
