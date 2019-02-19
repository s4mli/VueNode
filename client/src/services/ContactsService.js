import Api from '@/services/Api'

export default {
    fetchContacts() {
        return Api().get('contacts')
    },
    addContact(params) {
        return Api().post('contacts', params)
    },
    getContact(params) {
        return Api().get('contacts/' + params.id)
    },
    updateContact(params) {
        return Api().put('contacts/' + params.id, params)
    },
    deleteContact(id) {
        return Api().delete('contacts/' + id)
    }
}
