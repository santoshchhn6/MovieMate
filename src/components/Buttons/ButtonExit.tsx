type Props={
    onClick():void;
}

const ButtonExit = ({onClick}:Props) => <button
className="w-[40px] aspect-square text-[20px] font-semibold text-center bg-blue-600 hover:bg-red-600"
onClick={onClick}
>
X
</button>

export default ButtonExit;
