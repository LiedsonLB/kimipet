import { useSpring, animated } from "@react-spring/web";

interface AnimatedNumberProps {
    value: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
    const { number } = useSpring({
        from: { number: 0 },
        number: value,
        delay: 200,
        config: { duration: 1000 }
    });

    return <animated.div>{number.to((n: number) => n.toFixed(0))}</animated.div>;
};

export default AnimatedNumber;