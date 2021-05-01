import tw from "twin.macro";

export const Container = tw.div`w-full h-full max-w-sm flex flex-col px-6 sm:px-10 lg:px-6 py-10 justify-between shadow-raised bg-secondary text-gray-100 relative overflow-y-auto  opacity-75`;

export const ContainerLabel = tw.h2`mr-auto text-3xl sm:text-4xl font-bold`;

export const PatternLabel = tw.h3`mr-auto px-6 py-3 text-gray-100 rounded-full font-bold border-transparent tracking-wide hover:bg-gray-100 hover:text-primary hover:cursor-pointer`;
