export class ContactService{
    contacts = [
        {
            name: 'Ricardo M.',
            phone: '(11) 99999-9999',
            email : 'joao@email.com',
            picture: '../../assets/icon/ricardo.png'
        },
        {
            name: 'Maria',
            phone: '(11) 88888-8888',
            email: 'maria@email.com',
            picture: '../../assets/icon/contact-icon.png'
        },
        {
            name: 'Pedro',
            phone: '(11) 77777-7777',
            email: 'pedro@email.com',
            picture: '../../assets/icon/contact-icon.png'
        }
    ]

    public pushToArray(arr, obj) {
        const index = arr.findIndex((e) => e.id === obj.id);
    
        if (index === -1) {
          arr.push(obj);
        } else {
          arr[index] = obj;
        }
      }

      public updateContactList(contactObj, index) {
        this.contacts[index] = contactObj;
      }

    removeContact (index){
        this.contacts.splice(index, 1);
        console.log('apagou')
    }
}