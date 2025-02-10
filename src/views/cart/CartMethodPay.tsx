import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { BtnText, InputRadio } from '../../components';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export const CartMethodPay = () =>
{
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [selectedMethod, setSelectedMethod] = useState("qr");
  const [generateQr, setGenerateQr] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(event.target.value)
  }

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="w-full md:w-[30%] mt-8 md:mt-0 relative overflow-auto h-[77vh] px-3">
      
      {/* GENERACION DE QR */}
      {
        generateQr 
        ? <>
          <div className="h-[10px]"/>
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="flex flex-col items-center">
              <QRCodeCanvas 
                value={"https://ecommerce-app-web.vercel.app/"+totalAmount.toFixed(2)} 
                size={150}
                bgColor="#fff" 
                fgColor="#f87171" 
                level="H" />
                <p className="pt-5">
                  Pago por un total de: <b>Bs {totalAmount.toFixed(2)}</b>
                </p>
            </div>
          </div> 
          <div className="h-[30px]"/>
          </>
        : null
      }
      
      {/* FORMA METODO DE PAGO */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Resumen de compra</h2>
        <div className="flex justify-between items-center font-bold text-lg mb-4">
          <span>Total:</span>
          <span>Bs {totalAmount.toFixed(2)}</span>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Método de pago</h3>
          <InputRadio
            id="qr-payment"
            name="payment-method"
            value="qr"
            label="Pago por QR"
            checked={selectedMethod === "qr"}
            onChange={handleChange} />
            
          {/* <InputRadio
            id="target-payment"
            name="payment-method"
            value="target"
            label="Pago por tarjeta"
            checked={selectedMethod === "target"}
            onChange={handleChange} />
            
          <InputRadio
            id="paypal-payment"
            name="payment-method"
            value="paypal"
            label="Pago por PayPal"
            checked={selectedMethod === "paypal"}
            onChange={handleChange} /> */}
        </div>
        <BtnText 
          onClick={() => {
            if(generateQr) setGenerateQr(false)
            else navigate('/e-commerce')
          }} 
          hoverBg="#400">
          Cancelar
        </BtnText>
        <div className="h-[10px]"/>
        <BtnText onClick={() => {setGenerateQr(!generateQr)}} hoverBg="#400" disabled={generateQr == true || totalAmount == 0}>
          Generar QR
        </BtnText>
      </div>
    </div>
  )
}