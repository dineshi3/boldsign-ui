import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';

import closeIcon from '@/assets/closeIcon.svg';

import styles from './styles.module.scss';

const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const FormModal = (props) => {
  const { content, showModal, setShowModal } = props;

  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState();

  useEffect(() => {
    showModal && document.getElementById('form-email-input').focus();
  }, [showModal]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors(false);
  };

  const handleSubmit = async () => {
    if (!(email && EMAIL_PATTERN.test(email))) return setErrors(true);

    const config = {
      method: 'post',
      url: `/api/lead`,
      data: {
        email: email,
        product: content.product,
        url: window.location.href,
      },
    };

    try {
      const response = await axios(config);
      toast.success('Email submitted successfully!');
    } catch (error) {
      console.log(error);
      toast.error('Internal Server Error. Please try again later!');
    }
    setShowModal(false);
  };

  return (
    <Modal centered className='form-modal' show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Body>
        <div className={styles.container}>
          <div className={styles.closeIcon}>
            <img {...closeIcon} onClick={() => setShowModal(false)} />
          </div>
          <div className={styles.inputContainer}>
            <p className='input-label'>Email</p>
            <input
              type='text'
              id='form-email-input'
              placeholder='Enter Email'
              className={errors ? styles.error : ''}
              onChange={handleEmailChange}
            />
          </div>
          <button className={`btn ${content.theme ? styles[content.theme.color] : '' }`} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
